const arrayList = [1, 3, 5, [2, 6, 7, 9], 4];

function flattenArray(arr) {
  let result = [];

  const arr1 = arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
  // const arr1 = arr.reduce((acc, curr) => {
  //   if (Array.isArray(curr)) {
  //     acc.push(...flattenArray(curr));
  //   } else {
  //     acc.push(curr);
  //   }
  //   return acc
  // }, []);

  // return arr1;

  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     result.push(...flattenArray(arr[i]));
  //   } else {
  //     result.push(arr[i]);
  //   }
  // }

  // return result;
}

console.log(flattenArray(arrayList));
