const arrayList = [1, 3, 5, [2, [6, 7], 9], 4];

function flattenArray(arr) {
  // return arr.flat(3);

  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   let char = arr[i];

  //   if (!Array.isArray(char)) {
  //     result.push(char);
  //   } else {
  //     result.push(...flattenArray(char));
  //   }
  // }

  // arr.forEach((el) => {
  //   if (!Array.isArray(el)) {
  //     result.push(el);
  //   } else {
  //     result.push(...flattenArray(el));
  //   }
  // });

  const flatten = arr.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      acc.push(curr);
    } else {
      acc.push(...flattenArray(curr));
    }
    return acc;
  }, []);

  return flatten;

  // return result;
}

console.log(flattenArray(arrayList));
