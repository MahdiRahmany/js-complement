const s = "anagram";
const t = "nagaram";

function validAnagram(s, t) {
  // const sort1 = s.split("").sort().join("");
  // const sort2 = t.split("").sort().join("");

  // if (sort1 !== sort2) {
  //   return false;
  // }

  const map1 = new Map();
  const map2 = new Map();

  for (const item of s) {
    map1.set(item, (map1.get(item) || 0) + 1);
  }

  for (const item of t) {
    if (!map1.has(item) || map1.get(item) === 0) {
      return false;
    } else {
      map1.set(item, map1.get(item.length - 1));
    }
  }
  return true;
}

console.log(validAnagram(s, t));
