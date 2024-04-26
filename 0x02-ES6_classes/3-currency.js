/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(name, code) {
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
    this._name = this._checkString(newName, 'newName');
  }

  set code(newCode) {
    this._code = this._checkString(newCode, 'newCode');
  }

  _checkString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be string`);
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._code} (${this._name})`;
  }
}
