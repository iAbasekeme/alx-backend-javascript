/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = this._checkString(brand, 'brand');
    this._motor = this._checkString(motor, 'motor');
    this._color = this._checkString(color, 'color');
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  _checkString(name, attr) {
    if (typeof name !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    } else {
      return name;
    }
  }
}
