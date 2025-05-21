// todo: check true of false, reverse array
const array = ["ab", "ba", "ca", "ac", "bc", "aa", "aa"];

const reverseArray = (arr) => {
  //! make variable to save data
  let result = {};

  //! for...if
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    result[char] = (result[char] || 0) + 1;

    const revArr = char.split("").reverse().join("");

    if (result[revArr]) result[revArr]++;

    if (revArr !== char && result[revArr] >= 2) return true;
  }

  //? return

  return false;
};

// log
console.log(reverseArray(array));

/*
// todo: check true of false, reverse array
const array = ["ab", "ba", "ca", "ac", "bc"];

const reverseArray = (arr) => {
  let revArr = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const result = char.split(" ").reverse().join("");
    revArr.push(result);

    if (revArr.includes(char)) {
      return true;
    }
  }

  return false;
};

// log
console.log(reverseArray(array));

*/
