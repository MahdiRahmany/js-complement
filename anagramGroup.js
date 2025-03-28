const group = ["cat", "act", "dog", "god", "tac"];

const anagramGroup = (arr) => {
  const map = new Map();

  for (const item of arr) {
    const letters = item.split("").sort().join("");

    if (map.has(letters)) {
      map.get(letters).push(item);
    } else {
      map.set(letters, [item]);
    }
  }

  return map;
};

console.log(anagramGroup(group));
