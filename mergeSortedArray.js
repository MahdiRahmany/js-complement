const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];
const m = 3;
const n = 3;

function mergeSortedArray(a, b, m, n) {
  let fList = m - 1;
  let sList = n - 1;
  let tList = m + n - 1;

  while (sList >= 0) {
    if (fList >= 0 && a[fList] > b[sList]) {
      a[tList] = a[fList];
      fList--;
    } else {
      a[tList] = b[sList];
      sList--;
    }

    tList--;
  }

  return a;
}

console.log(mergeSortedArray(a, b, m, n));
