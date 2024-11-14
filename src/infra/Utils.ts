import { Locator } from '@playwright/test'

export class Utils {
  public static randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  public static waitForResult = async <T>(action: () => Promise<T>, expected: T, retries: number, sleep: number, preAction?: () => Promise<any>,): Promise<T> => {
    let actualResult: T = await action()
    let retryCount = 0
    while (actualResult != expected && retryCount < retries) {
      if (preAction) {
        await preAction()
      }
      actualResult = await action()
      if (actualResult != expected) {
        retryCount++
        await this.delay(sleep)
      }
    }
    return actualResult
  }

  public static waitForVisible = async (locator: Locator, expected: boolean): Promise<boolean> => {
    return await this.waitForResult(() => locator.isVisible(), expected, 6, 1500)
  }

}
