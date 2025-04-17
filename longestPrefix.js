const strs = ["flower", "flow", "flight"];

function longestPrefix(str) {
  let result = "";
  const firstChar = str[0];

  for (let i = 0; i < firstChar.length; i++) {
    char = firstChar[i];

    for (const item of str) {
      console.log(item);
      if (i >= item.length || item[i] !== char) {
        return result;
      }
    }
    result += char;
  }

  return result;
}

console.log(longestPrefix(strs));
