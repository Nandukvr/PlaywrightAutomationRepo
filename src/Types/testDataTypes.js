// testDataTypes.js

/**
 * @typedef {Object} LoginTestData
 * @property {string} email
 * @property {string} password
 */

const loginData = {
  validUser: {
    email: 'standard_user',
    password: 'secret_sauce'
  },
  invalidUser: {
    email: 'invalid_user',
    password: 'wrong_password'
  }
};

module.exports = loginData;
