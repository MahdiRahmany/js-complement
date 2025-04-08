const numberList = [1, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 64, 93, 130];

const target1 = 24;
const target2 = 10;

// function BinarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = left + Math.floor((right - left) / 2);

//     if (arr[middle] === target) {
//       return `the middle is ${target} and index of ${middle}`;
//     } else if (arr[middle] < target) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }

//   return `Target ${target} Not Found`;
// }

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `the mid of ${mid} is target ${target}`;
    }

    arr[mid] < target ? (start = mid + 1) : (end = mid - 1);
  }

  return `not found the target ${target}`;
};

// console.log(BinarySearch(numberList, target1));

console.log(binarySearch(numberList, target1));
