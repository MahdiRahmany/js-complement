const s = "abccbaacz";

const appear = (str) => {
  const result = {};

  for (const char of str) {
    if (result[char]) {
      return char;
    } else {
      result[char] = 1;
    }
  }
};

console.log(appear(s));
