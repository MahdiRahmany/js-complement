function permutation(str) {
  let result = [];

  if (str.length === 0) {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let restOfString = str.slice(0, i) + str.slice(i + 1);
    let subPermutation = permutation(restOfString);

    for (let j = 0; j < permutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }

  return result;
}

console.log(permutation("abc"));
