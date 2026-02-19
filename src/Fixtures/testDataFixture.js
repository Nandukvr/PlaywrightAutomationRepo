const base = require('@playwright/test');
const DataGenerator = require('../utils/dataGenerator');

exports.test = base.test.extend({

  randomUser: async ({}, use) => {
    const user = {
      email: DataGenerator.randomEmail(),
      password: DataGenerator.randomPassword()
    };

    await use(user);
  }

});
