const params = (1, 2, "+");

const calc = (num1, num2, operator) => {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid");
  }

  return result;
};

console.log(calc(1, 2, "+"));
