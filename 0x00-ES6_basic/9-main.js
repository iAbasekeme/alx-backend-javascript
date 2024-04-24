// eslint-disable-next-line import/extensions
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

// eslint-disable-next-line jest/require-hook
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
// eslint-disable-next-line jest/require-hook
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
