const numberList = [2, 4, 6, 1, 5];
const target = 5;

function twoSum(num, t) {
  // const map = new Set();
  // let result = [];
  // for (const item of num) {
  //   current = target - item;
  //   if (map.has(current)) {
  //     result.push(current, item);
  //   } else {
  //     map.add(item);
  //   }
  // }

  let result = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      if (num[i] + num[j] === t) {
        result.push(num[i], num[j]);
      } else {
        false;
      }
    }
  }

  return result;
}

console.log(twoSum(numberList, target));
