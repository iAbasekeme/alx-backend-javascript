/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be string');
    }
    this._name = newName;
  }

  set code(newCode) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be string');
    }
    this._code = newCode;
  }

  // _checkString(value, attributeName) {
  //   if (typeof value !== 'string') {
  //     throw new TypeError(`${attributeName} must be string`);
  //   }
  //   return value;
  // }

  displayFullCurrency() {
    return `${this._code} (${this._name})`;
  }
}
