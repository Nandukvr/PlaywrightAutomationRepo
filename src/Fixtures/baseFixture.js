const base = require('@playwright/test');
const Helpers = require('../utils/helpers');
//const LoginPage = require('../pages/LoginPage');

exports.test = base.test.extend({

  helpers: async ({ page }, use) => {
    const helper = new Helpers(page);
    await use(helper);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }

});

exports.expect = base.expect;
