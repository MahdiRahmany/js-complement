/*
const fibonacci = (n) => {
  // recursion

  // base case
  if (n <= 1) {
    return n;
  }
  // recursion
  return fibonacci(n - 1) + fibonacci(n - 2);
};
*/
/*
const fibonacci = (n) => {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    
    // [prev, curr] = [curr, prev + curr];
    

    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(fibonacci(6));
*/