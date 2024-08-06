// widgetUtils.ts

import { driver } from '@wdio/globals';

/**
 * Checks if the widget specified by the selector is displayed on the screen.
 * @param selector - The selector to find the widget.
 * @param timeout - The timeout in milliseconds to wait for the widget to appear.
 * @returns A promise that resolves to true if the widget is displayed, false otherwise.
 */
export async function isDisplayed(selector: string, timeout: number = 2000): Promise<boolean> {
  try {
    await driver.execute('flutter:waitFor', selector, timeout);
    return true;
  } catch (error) {
    console.error(`Widget not displayed: ${error}`);
    return false;
  }
}

/**
 * Checks if the widget specified by the selector is not displayed on the screen.
 * @param selector - The selector to find the widget.
 * @param timeout - The timeout in milliseconds to wait for the widget to disappear.
 * @returns A promise that resolves to true if the widget is not displayed, false otherwise.
 */
export async function isNotDisplayed(selector: string, timeout: number = 2000): Promise<boolean> {
  try {
    await driver.execute('flutter:waitForAbsent', selector, timeout);
    return true;
  } catch (error) {
    console.error(`Widget still displayed: ${error}`);
    return false;
  }
}
