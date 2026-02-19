// userTypes.js

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} password
 * @property {string} role
 */

const createUser = (username, password, role) => {
  return { username, password, role };
};

module.exports = { createUser };
