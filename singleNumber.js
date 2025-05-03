const nums = [4, 1, 2, 1, 2];

const singleNum = (num) => {
  const result = {}
  let number = 0;

  for (const char of num) {
      result[char] = (result[char] || 0) + 1
  }

  for (const key in result){
      if (result[key] === 1) number = key
  }

  return number
};

console.log(singleNum(nums));
