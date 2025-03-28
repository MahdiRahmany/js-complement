const word = "The quick brown fox jumps over the lazy dog.";

function wordCounter(str) {
  const letters = str.toLowerCase().replace(/[.]/g, "").split(" ");
  const map = new Map();

  for (const word of letters) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  return map;
}

console.log(wordCounter(word));
