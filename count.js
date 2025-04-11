const number = 5;

const counter = (num) => {
  let count = num;

  function increment() {
    return ++count;
  }

  // function decrement() {
  //   return --count;
  // }

  function reset() {
    count = num;
    return count;
  }

  return {
    increment: increment(),
    // decrement: decrement(),
    reset: reset(),
  };
};

console.log(counter(number));
