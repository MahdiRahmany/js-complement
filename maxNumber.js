const findMaxNumber = (arr) => {
  // let result = 0;
  // const result = Math.max(...arr)

  // for (const num of arr) {
  //   if (num > result) {
  //     result = num;
  //   }
  // }

  const result = arr.reduce((acc, curr) => {
    return Math.max(acc, curr);
  }, []);

  return result;
};

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
