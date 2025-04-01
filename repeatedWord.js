const givenStr = "ali reza arash amir mahdi ali ali reza";

const repeatedWord = (str) => {
  const splitted = str.split(" ");
  const result = {};

  let maxWord = "";
  let maxCount = 0;

  for (let i = 0; i < splitted.length; i++) {
    const current = splitted[i];

    result[current] = (result[current] || 0) + 1;

    if (result[current] > maxCount) {
      maxCount = result[current];
      maxWord = current;
    }
  }

  return `${maxWord} ${maxCount}`;
};

console.log(repeatedWord(givenStr));
