const titleCase = (str) => {
  const splitChar = str.split(" ");
  let result = [];

  for (let i = 0; i < splitChar.length; i++) {
    const char = splitChar[i];
    const firstChar = splitChar[i][0];
    result.push(firstChar.toUpperCase() + char.slice(1));
    // result.push(word);
  }

  return result.join(" ");
};

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
