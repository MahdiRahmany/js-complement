const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSubarray(arr) {
  let maxSub = [0];
  curSum = 0;

  for (const num of arr) {
    if (curSum < 0) {
      curSum = 0;
    }

    curSum += num;
    maxSub = Math.max(maxSub, curSum);
  }

  return maxSub;
}

console.log(maximumSubarray(array));
