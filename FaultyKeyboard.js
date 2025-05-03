const s = "string";

const faulty = (str) => {
  const result = [];
  // const i = "i";

  for (const char of str) {
    if (char === "i") {
      result.reverse();
    } else {
      result.push(char);
    }
  }

  return result.join("");
};

console.log(faulty(s));
