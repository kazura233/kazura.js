import { resolve } from 'pathe'
import type { BuildEntry, BuildOptions, KomekkoOptions, ModuleFormat } from '../types'
import { tryRequire } from '../utils'
import type { PackageJson } from 'pkg-types'
import Module from 'node:module'
import defu from 'defu'

export type OutputDescriptor =
  | {
      file: string
      format: ModuleFormat
    }
  | {
      file: string
      declaration: boolean
    }

export class RollupBuilder {
  public options: BuildOptions
  public pkg: PackageJson
  public warnings: Set<string> = new Set()

  constructor(buildOptions: KomekkoOptions) {
    const rootDir = resolve(process.cwd(), buildOptions.rootDir || './')
    this.pkg = tryRequire('./package.json', rootDir)
    this.options = defu(buildOptions, this.defaultBuildOptions())
    this.options.external.push(
      ...Object.keys(this.pkg.dependencies || {}),
      ...Object.keys(this.pkg.peerDependencies || {})
    )

    console.log('>>>>>>>>>>', 'RollupBuilder->constructor->this.options', this.options)
  }

  public defaultBuildOptions(): BuildOptions {
    return {
      rootDir: resolve(process.cwd(), './'),
      sourcemap: false,
      declaration: false,
      outDir: resolve(process.cwd(), './dist'),
      alias: {},
      replace: {},
      external: [
        ...Module.builtinModules,
        ...Module.builtinModules.map((module) => 'node:' + module),
      ],
      entries: [],
      rollup: {
        replace: {
          preventAssignment: true,
        },
        alias: {},
        resolve: {
          preferBuiltins: true,
        },
        json: {
          preferConst: true,
        },
        commonjs: {
          ignoreTryCatch: true,
        },
        esbuild: { target: 'esnext' },
        dts: {
          compilerOptions: { preserveSymlinks: false },
          respectExternal: true,
        },
      },
    }
  }

  public autoPreset() {
    // 如果通过 komekko.config.ts 配置了 entries，则不再自动预设
    if (this.options.entries.length) {
      return
    }

    const entries = this.inferEntries()
    console.log('>>>>>>>>>>', 'RollupBuilder->autoPreset->entries', entries)

    this.options.entries.push(...entries)
  }

  public inferEntries(): BuildEntry[] {
    const outputs = this.extractExports(this.pkg.exports)

    if (this.pkg.bin) {
      const binaries =
        typeof this.pkg.bin === 'string' ? [this.pkg.bin] : Object.values(this.pkg.bin)
      for (const file of binaries) {
        const output = this.inferExportType('', file)
        if (output) {
          outputs.push(output)
        }
      }
    }

    if (this.pkg.main) {
      const output = this.inferExportType('', this.pkg.main)
      if (output) {
        outputs.push(output)
      }
    }

    if (this.pkg.module) {
      outputs.push({ file: this.pkg.module, format: 'esm' })
    }

    if (this.pkg.types || this.pkg.typings) {
      outputs.push({
        file: this.pkg.types || this.pkg.typings!,
        declaration: true,
      })
    }

    this.checkExtension(outputs)

    return outputs.map<BuildEntry>((output) => ({
      entryFileName: output.file,
      entryFileDir: this.options.rootDir,
      entryAlias: output.file,
      outFileName: output.file,
      outFileDir: this.options.outDir,
      declaration: 'declaration' in output ? output.declaration : undefined,
      sourcemap: this.options.sourcemap,
      format: 'format' in output ? output.format : undefined,
    }))
  }

  public checkExtension(outputs: OutputDescriptor[]) {
    outputs.forEach((output) => {
      if ('declaration' in output) {
        if (!output.file.endsWith('.d.ts')) {
          throw new Error(`Expected declaration file to end with .d.ts, received ${output.file}`)
        }
      }

      if ('format' in output) {
        if (output.format === 'esm') {
          if (!output.file.endsWith('.mjs') && !output.file.endsWith('.js')) {
            throw new Error(`Expected ESM file to end with .mjs or .js, received ${output.file}`)
          }
        }

        if (output.format === 'cjs') {
          if (!output.file.endsWith('.cjs') && !output.file.endsWith('.js')) {
            throw new Error(`Expected CJS file to end with .cjs or .js, received ${output.file}`)
          }
        }
      }
    })
  }

  public extractExports(exports: PackageJson['exports']): OutputDescriptor[] {
    if (!exports) {
      return []
    }

    if (typeof exports === 'string') {
      return [this.inferExportType('', exports)].filter(Boolean) as OutputDescriptor[]
    }

    return Object.entries(exports)
      .flatMap(([condition, exports]) => {
        console.log('>>>>>>>>>>', 'RollupBuilder->extractExports->condition', condition)
        console.log('>>>>>>>>>>', 'RollupBuilder->extractExports->exports', exports)
        if (typeof exports === 'string') {
          return this.inferExportType(condition, exports)
        }
        return this.extractExports(exports)
      })
      .filter(Boolean) as OutputDescriptor[]
  }

  public inferExportType(condition: string, file: string): OutputDescriptor | null {
    if (file.endsWith('.d.ts')) {
      return { file, declaration: true }
    }
    if (file.endsWith('.mjs')) {
      return { file, format: 'esm' }
    }
    if (file.endsWith('.cjs')) {
      return { file, format: 'cjs' }
    }

    if (file.endsWith('.js')) {
      switch (condition) {
        case 'import': {
          return { file, format: 'esm' }
        }
        case 'require': {
          return { file, format: 'cjs' }
        }
        default: {
          return { file, format: this.pkg.type === 'module' ? 'esm' : 'cjs' }
        }
      }
    }

    return null
  }
}
