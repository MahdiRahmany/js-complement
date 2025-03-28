const n = 19;

function isHappy(n) {
  let visited = new Set();

  function getNextNumber(n) {
    let output = 0;

    while (n > 0) {
      let digit = n % 10;
      output += digit * digit;
      n = Math.floor(n / 10);
    }
    return output;
  }

  while (!visited.has(n)) {
    visited.add(n);
    n = getNextNumber(n);
    if (n === 1) {
      return true;
    }
  }

  return false;
}

console.log(isHappy(n));
