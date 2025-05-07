const n = 101;

const nextGreat = (n) => {
  const reverse = String(n).split("").reverse().join("");

  if (reverse > n) {
    return parseInt(reverse);
  }

  return -1;
};

console.log(nextGreat(n));
