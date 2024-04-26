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
    if (typeof newCode !== 'string') {
      throw new TypeError(`${newName}  must be a string`);
    }
    this._code = newName;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError(`${newCode}  must be a string`);
    }
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._code} (${this._name})`;
  }
}
