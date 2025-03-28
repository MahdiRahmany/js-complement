const numberList = [1, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 64, 93, 130];

const target1 = 24;
const target2 = 10;

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (numberList[middle] === target) {
      return `the middle is ${target} and index of ${middle}`;
    } else if (numberList[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return `Target ${target} Not Found`;
}

console.log(BinarySearch(numberList, target1));
