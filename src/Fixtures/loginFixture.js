const base = require('@playwright/test');

exports.test = base.test.extend({

  loggedInPage: async ({ page }, use) => {

    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await use(page);
  }

});

exports.expect = base.expect;
