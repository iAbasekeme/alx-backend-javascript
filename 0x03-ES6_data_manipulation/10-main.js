/* eslint-disable jest/require-hook */
/* eslint-disable semi */
/* eslint-disable import/extensions */
import updateUniqueItems from './10-update_uniq_items.js'
import groceriesList from './9-groceries_list.js';

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);