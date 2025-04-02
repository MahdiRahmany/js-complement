const array = [17, 18, 5, 4, 6, 1];

const replaceGreatest = (arr) => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

console.log(replaceGreatest(array));
