const base = require('@playwright/test');

exports.test = base.test.extend({

  authToken: async ({ request }, use) => {

    const response = await request.post('/login', {
      data: {
        username: 'admin',
        password: 'admin123'
      }
    });

    const body = await response.json();
    await use(body.token);
  }

});
