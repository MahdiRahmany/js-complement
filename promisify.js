// console.log("log --1");
// setTimeout(() => console.log("log --3"), 2000);
// setTimeout(() => console.log("log --4"), 3000);
// console.log("log --2");

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

console.log("log --1");
wait(2000)
  .then(() => {
    console.log("log --2sec");
    return wait(3000);
  })
  .then(() => {
    console.log("log --3sec");
  });
console.log("log --2");
