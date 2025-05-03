const nums = [2, 11, 10, 1, 3];
const k = 10;

const minOperation = (num, k) => {
  let count = 0;

  console.log(num.sort((a, b) => a - b));

  for (let i = 0; i < num.length; i++) {
    char = num[i];
    if (char < k) {
      count++;
    }
  }

  return count;
};

console.log(minOperation(nums, k));
