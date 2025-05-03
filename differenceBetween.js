const nums = [1, 15, 6, 3];

const difBetween = (num) => {
  let first = 0;
  let second = 0;

  for (let i = 0; i < num.length; i++) {
    first += num[i];
  }

  const split = num.join("").split("");
  for (let j = 0; j < split.length; j++) {
    second += parseInt(split[j]);
  }

  return first - second;
};

console.log(difBetween(nums));
