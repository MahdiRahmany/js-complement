const input = 121;

const palindrome = (num) => {
  const reverse = num.toString().split("").reverse().join("");
  const number = Number(reverse)

  console.log(typeof number);
  return number === num;
};

console.log(palindrome(input));
