const a = [1, 2, 4];
const b = [1, 3, 4];

function mergeTwoSorted(a, b) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      merged.push(a[i]);
      i++
    } else {
      merged.push(b[j]);
      j++
    }
  }

  return merged;
}

console.log(mergeTwoSorted(a, b));
