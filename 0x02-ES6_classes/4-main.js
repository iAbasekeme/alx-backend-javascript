/* eslint-disable jest/require-hook */
/* eslint-disable import/extensions */
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
// eslint-disable-next-line jest/require-hook
console.log(p.displayFullPrice());
