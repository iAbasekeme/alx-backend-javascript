/* eslint-disable import/extensions */
import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
// eslint-disable-next-line jest/require-hook
console.log(dollar.displayFullCurrency());
