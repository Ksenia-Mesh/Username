export default class Validator {
  static validateUsername(username) {
    const template1 = /[A-Za-z][\w-]*[^_\W\d-]+$/.test(username);
    const template2 = /\d{4}/.test(username);
    return template1 && !template2;
  }
}
