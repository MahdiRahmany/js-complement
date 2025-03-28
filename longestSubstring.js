const s = "abcabcbb";

function longestSubstring(str) {
  let result = {};
  let character = [];

  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (character.includes(item)) {
      i++;
    } else {
      character.push(item);
    }
  }

  return character.length;
}

console.log(longestSubstring(s));
