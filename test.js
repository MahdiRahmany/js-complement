const list = [1, 5, 1, 2, 5, 6, 8, 7, 6, 5, 4, 3, 3, 2, 4, 5, 1, 1];

function total(arr) {
  // let result = {};

  // for (const item of arr) {
  //   let current = arr[item];
  //   if (!result[item]) {
  //     result[item] = 1;
  //   } else {
  //     result[item]++;
  //   }
  // }

  // let maxNum = [];
  // let maxValue = 0;

  // for (const item in result) {
  //   if (result[item] > maxValue) {
  //     maxValue = [parseInt(result[item])];
  //     maxNum = item;
  //   } else if (result[item] === maxValue) {
  //     maxNum.push(parseInt(item));
  //   }
  // }

  // let map = new Map();

  // for (const item of arr) {
  //   if (!map.has(item)) {
  //     map.set(item, 1);
  //   } else {
  //     map.set(item, map.get(item) + 1);
  //   }
  // }

  // let maxNum = [];
  // let maxValue = 0;
  // for (const [key, value] of map) {
  //   // console.log(item);
  //   if (value > maxValue) {
  //     maxValue = value;
  //     maxNum = [key];
  //   } else if (value === maxValue) {
  //     maxNum.push(key);
  //   }
  // }

  let result = arr.reduce((acc, curr) => (acc[curr] || 0) + 1, []);
  console.log(result);
  // console.log(`the number of ${maxNum} with iterate ${maxValue}`);
}

console.log(total(list));
