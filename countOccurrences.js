const countOccurrences = (word, char) => {
  const result = word.split(char).length - 1;

  // const split = word.split("");

  // for (const item of split) {
  //   if (item === char) {
  //     result++;
  //   }
  // }
  return result;
};

console.log(countOccurrences("hello", "l")); // 2
