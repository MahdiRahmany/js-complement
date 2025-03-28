const arrayList = ([1, 2, 3], [2, 3, 4]);

function symmetricDifference(arr1, arr2) {
  console.log(arr2);
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  let result = [];

  // for (const item of arr1) {
  //   if (!set2.has(item)) result.push(item);
  // }

  // for (const item of arr2) {
  //   if (!set1.has(item)) result.push(item);
  // }

  // return result;
}

console.log(symmetricDifference([1, 2, 3], [2, 3, 4]));
