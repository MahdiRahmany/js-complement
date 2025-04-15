const list = [1, 5, 1, 2, 5, 6, 8, 7, 6, 5, 4, 3, 3, 2, 4, 5, 1, 1];

function total(arr) {
  let result = {};

  for (const item of arr) {
    let current = arr[item];
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item]++;
    }
  }

  let maxNum = [];
  let maxCount = 0;

  for (const item in result) {
    if (result[item] > maxCount) {
      maxCount = [parseInt(result[item])];
      maxNum = item;
    } else if (result[item] === maxCount) {
      maxNum.push(parseInt(item));
    }
  }

  // let map = new Map();

  // for (const item of arr) {
  //   if (!map.has(item)) {
  //     map.set(item, 1);
  //   } else {
  //     map.set(item, map.get(item) + 1);
  //   }
  // }

  // let maxNum = [];
  // let maxCount = 0;
  // for (const [key, value] of map) {
  //   // console.log(item);
  //   if (value > maxCount) {
  //     maxCount = value;
  //     maxNum = [key];
  //   } else if (value === maxCount) {
  //     maxNum.push(key);
  //   }
  // }

  // const result = {};

  // let maxNum = [];
  // let maxCount = 0;

  // arr.forEach((el) => {
  //   result[el] = (result[el] || 0) + 1;
  // });

  // for (const item in result) {
  //   if (result[item] > maxCount) {
  //     maxCount = result[item];
  //     maxNum = item;
  //   }
  // }

  return `${maxNum} , ${maxCount}`;
}

console.log(total(list));
