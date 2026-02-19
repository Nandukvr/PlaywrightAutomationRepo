// dataGenerator.js

class DataGenerator {

  static randomString(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static randomNumber(length = 5) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  static randomEmail() {
    return `test_${this.randomString(5)}@mail.com`;
  }

  static randomUsername() {
    return `user_${this.randomString(4)}`;
  }

  static randomPassword() {
    return `Pass@${this.randomString(4)}${this.randomNumber(2)}`;
  }

  static randomPhoneNumber() {
    return `9${this.randomNumber(9)}`;
  }

  static randomFullName() {
    return `Test${this.randomString(4)} User`;
  }
}

module.exports = DataGenerator;
