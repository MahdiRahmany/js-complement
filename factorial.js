/*
const factorial = (n) => {
  // recursion

  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  return (n *= factorial(n - 1));
};
*/

const factorial = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(5));
