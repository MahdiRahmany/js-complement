const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = (num) => {
  const result = {};
  const majority = num.length / 2;
  let res = 0;

  for (const item of num) {
    result[item] = (result[item] || 0) + 1;

    if (result[item] > majority) {
      res = item;
    }
  }

  return res;
};

console.log(majorityElement(nums));
