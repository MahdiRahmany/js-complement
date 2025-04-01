const stock = [7, 1, 5, 3, 6, 4];

function bestTimeStock(arr) {
  let minMax = arr[0];
  let buy = 0;

  for (let i = 1; i < arr.length; i++) {
    if (minMax > arr[i]) {
      minMax = arr[i];
    }

    buy = Math.max(buy, arr[i] - 1);
  }

  return buy;
}

console.log(bestTimeStock(stock));
