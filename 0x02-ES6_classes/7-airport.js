/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this._name = this._checkString(name, 'name');
    this._code = this._checkString(code, 'code');
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${(this._code)}]`;
  }

  _checkString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be string`);
    }
    return value;
  }
}
