function findMaxAverage(nums, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSUm = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];

    if (currentSum > maxSUm) {
      maxSum = currentSum;
    }
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
