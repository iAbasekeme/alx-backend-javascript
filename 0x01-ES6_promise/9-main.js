import guardrail from './9-try';
import divideFunction from './8-try';

// eslint-disable-next-line jest/require-hook
console.log(guardrail(() => { return divideFunction(10, 2)}));
// eslint-disable-next-line jest/require-hook
console.log(guardrail(() => { return divideFunction(10, 0)}));