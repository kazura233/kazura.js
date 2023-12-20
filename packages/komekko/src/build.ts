import { resolve } from 'pathe'
import { tryRequire } from './utils'
import { RollupBuilder } from './builder/rollup'
import { KomekkoOptions } from './types'
import defu from 'defu'

export async function build(rootDir: string, inputConfig: KomekkoOptions = {}) {
  rootDir = resolve(process.cwd(), rootDir || './')
  console.log('>>>>>>>>>>', 'build->rootDir', rootDir)
  console.log('>>>>>>>>>>', 'build->inputConfig', inputConfig)

  const komekkoConfig: KomekkoOptions | KomekkoOptions[] = tryRequire('./komekko.config', rootDir)
  const buildConfigs = (Array.isArray(komekkoConfig) ? komekkoConfig : [komekkoConfig]).filter(
    Boolean
  )
  console.log('>>>>>>>>>>', 'build->buildConfigs', buildConfigs)

  for (const buildConfig of buildConfigs) {
    const builder = new RollupBuilder(defu(inputConfig, buildConfig))
    builder.autoPreset()
    await builder.build()
    console.log('>>>>>>>>>>', 'Successfully built', '🎉')
  }
}
