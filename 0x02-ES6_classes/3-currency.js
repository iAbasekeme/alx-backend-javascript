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
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._code} ${this._name}`;
  }
}
