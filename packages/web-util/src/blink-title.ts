export class BlinkTitle {
  /**
   * 原始标题
   */
  public originalTitle = document.title

  /**
   * 自定义文本1
   * @example '【新消息】'
   */
  public customText1 = ''

  /**
   * 自定义文本2
   * @example '【　　　】'
   */
  public customText2 = ''

  /**
   * 定时器
   */
  public timer: number | null = null

  /**
   * 构造函数
   * @param customText1 交替显示的文本1 例子：'【新消息】'
   * @param customText2 交替显示的文本2 例子：'【　　　】'
   */
  public constructor(customText1: string, customText2: string) {
    this.customText1 = customText1
    this.customText2 = customText2
  }

  /**
   * 开始闪烁
   * @param interval 闪烁间隔
   * @returns 返回一个函数，调用该函数可以停止闪烁
   */
  public startBlinking(interval: number) {
    if (this.timer) this.stopBlinking()

    let tag = true

    this.timer = window.setInterval(() => {
      document.title = tag ? this.customText1 : this.customText2
      tag = !tag
    }, interval)

    return () => this.stopBlinking()
  }

  /**
   * 停止闪烁
   */
  public stopBlinking() {
    if (this.timer) {
      clearInterval(this.timer)
      document.title = this.originalTitle
    }
  }
}
