import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
// eslint-disable-next-line jest/require-hook
handleResponseFromAPI(promise);
