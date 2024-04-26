/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._checkNumber(size, 'size');
    this._location = this._checkString(location, 'location');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  _checkString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be string`);
    }
    return value;
  }

  _checkNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be number`);
    }
    return value;
  }
}
