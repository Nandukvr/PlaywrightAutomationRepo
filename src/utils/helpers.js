// helpers.js
const { expect } = require('@playwright/test');

class Helpers {
  constructor(page) {
    this.page = page;
  }

  // Click helper
  async clickElement(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  // Type helper
  async enterText(locator, text) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }

  // Get text helper
  async getText(locator) {
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }

  // Wait for element
  async waitForElement(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  // Assertion helper
  async verifyText(locator, expectedText) {
    await expect(locator).toHaveText(expectedText);
  }

  // Verify element visible
  async verifyElementVisible(locator) {
    await expect(locator).toBeVisible();
  }

  // Screenshot helper
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `./screenshots/${name}.png` });
  }

  // Scroll helper
  async scrollToElement(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  // Dropdown select
  async selectByValue(locator, value) {
    await locator.selectOption(value);
  }
}

module.exports = Helpers;
