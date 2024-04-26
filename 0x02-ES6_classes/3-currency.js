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
    this._name = this._checkString(newName, 'name');
  }

  set code(newCode) {
    this._code = this._checkString(newCode, 'code');
  }

  _checkString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be string`);
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
