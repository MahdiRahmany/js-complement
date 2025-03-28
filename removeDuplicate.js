const duplicated = [1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7]; // [1,2,3,4,5,6,7]

function removeDuplicate(arr) {
  // const result = [...new Set(arr)];

  const result = [];

  // for (const item of arr) {
  //   if (!result.includes(item)) {
  //     result.push(item);
  //   }
  // }

  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

console.log(removeDuplicate(duplicated));
