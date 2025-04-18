function checkLetter(str, val) {
  let min = 0;
  let max = str.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (middle < val) {
      min = middle + 1;
    } else if (middle > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}

const letter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 14, 15, 16];

console.log(checkLetter(letter, 12));
