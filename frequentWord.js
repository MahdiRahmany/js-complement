const givenStr = "ali reza arash amir mahdi ali ali reza reza";

const frequentWord = (str) => {
  const splitStr = str.split(" ");
  let result = {};

  let maxWord = [];
  let countWord = 0;

  for (let i = 0; i < splitStr.length; i++) {
    const char = splitStr[i];

    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }

    const current = result[char];
    if (current > countWord) {
      countWord = current;
      maxWord = [char];
    } else if (current === countWord) {
      if (!maxWord.includes(char)) {
        maxWord.push(char);
      }
    }
  }

  return `the words ${maxWord.join(", ")} are iterated ${countWord} times`;
};

console.log(frequentWord(givenStr));
