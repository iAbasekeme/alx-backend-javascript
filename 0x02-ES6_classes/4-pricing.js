/* eslint-disable constructor-super */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line quotes
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._checkNumber(amount, 'amount');
    this._currency = this._checkCurrency(currency, 'currency');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    this._amount = this._checkNumber(newAmount, 'newAmount');
  }

  set currency(newCurrency) {
    this._currency = this._checkString(newCurrency, 'newCurrency');
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }

  _checkCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be type currency`);
    }
    return value;
  }

  _checkNumber(value, attrName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attrName} must be a number`);
    }
    return value;
  }
}
