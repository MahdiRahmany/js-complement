// 1 - Binary Search:
/*
const numberList = [1, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 64, 93, 130];

const target1 = 24;
const target2 = 10;

const binarySearch = (arr, t) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === t) {
      return mid;
    } else if (arr[mid] < t) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `could not find %{t}`;
};

console.log(binarySearch(numberList, target1));
console.log(binarySearch(numberList, target2));
*/

// 2 - flatten Array:
/*
const arrayList = [1, 3, 5, [2, [6, 7], 9], 4];

const flattenArr = (arr) => {
  // return arr.flat(3)

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    console.log(char);
    if (!Array.isArray(char)) {
      result.push(char);
    } else {
      result.push(...flattenArr(char));
    }
  }

  return result;
};

console.log(flattenArr(arrayList));
*/

// 3 - frequent Number
/*
const list = [1, 5, 1, 2, 5, 6, 8, 7, 6, 5, 4, 3, 3, 2, 4, 5, 1, 1];

const frequentNumber = (arr) => {
  const result = {};
  let countNum = 0;
  let maxNum = '';

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    result[char] = (result[char] || 0) + 1;

    if (result[char] > countNum) {
      countNum = result[char];
      maxNum = [char];
    } else if (result[char] === countNum) {
      if (!maxNum.includes(char)){
        maxNum.push(char);
      }
    }
  }

  return `${maxNum.join(", ")} , ${countNum}`;
};

console.log(frequentNumber(list));
*/

// 4 - model data
/*
class Employees {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

const sumOfSalary = (employee) => {
  let sum = employee.salary;

  for (let i = 0; i < employee.children.length; i++) {
    const child = employee.children[i];
    sum += sumOfSalary(child);
  }

  return sum;
};

const hossein = new Employees("Hossein", 56);
const mahdi = new Employees("Mahdi", 47);
const ahmad = new Employees("Ahmad", 45);
const ali = new Employees("Ali", 32);
const reza = new Employees("Reza", 30);
const erfan = new Employees("Erfan", 18);

hossein.addChild(mahdi);
hossein.addChild(ahmad);
mahdi.addChild(ali);
ahmad.addChild(reza);
ali.addChild(erfan);

console.log(sumOfSalary(mahdi));

*/

// 5 - promisify
// console.log("log 1");
// setTimeout(()=>console.log("log 3"), 2000);
// setTimeout(()=>console.log("log 4"), 3000);
// console.log("log 2");
/*
const promisify = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
};

async function main() {
  console.log("log 6");
  await promisify(2)
  console.log("log ");
}

console.log("log 1");
promisify(2).then(()=>{
  console.log("log 3");
  return promisify(3)
}).then(()=>{
  console.log("log 4");
})

Promise.resolve().then(()=>{
  setTimeout(()=>console.log("log 5"), 4000)
})
console.log("log 2");

// micro task queue => promise
// macro task queue => setTimeout , setInterval 
*/
// 6 - remove duplicate
/*
const duplicated = [1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7];

const removeDuplicated = (arr) => {
  // return [...new Set(arr)];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (!result.includes(char)) {
      result.push(char)
    } 
  }

  return result;
};

console.log(removeDuplicated(duplicated));
*/

// 7 - swapping var
/*
a = 10;
b = 20;

const c = a;
// a = b; // 20
// b = c; // 10

// [a,b] = [b,a]

const temp = b + a; // 10

a = temp - a; // 20
b = temp - a; // 10

console.log(a, b);
*/

// 8 - anagram group
/*
const group = ["cat", "act", "dog", "god", "tac"];

const anagramGroup = (str) => {
  let result = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const split = char.split("").sort().join("");

    if (!result.has(split)) {
      result.set(split, [char]);
    } else {
      result.get(split).push(char);
    }
  }

  return result;
};

console.log(anagramGroup(group));
*/

// 9 - two sum
/*
const numberList = [2, 4, 6, 1, 5];
const target = 5;

const twoSum = (arr, t) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    for (let j = i; j < arr.length; j++) {
      let ele = arr[j];
      if (char + ele === t) {
        result.push(char, ele);
      }else {
        false
      }
    }
  }

  return result;
};

console.log(twoSum(numberList, target));
*/
// 10 -

/*
const wait = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

async function loginUser(user) {
  await wait(2);
  if (user === "admin") return "login successful!";
  throw "failed";
}

async function fetchUser() {
  await wait(2);
  return { name: "ali", id: 123 };
}

async function main() {
  try {
    console.log("start login user");

    const login = await loginUser("admin");
    console.log(login);

    const fetch = await fetchUser();
    console.log("user: ", fetch);

    const [result1, result2] = await Promise.all([
      wait(2).then(() => "task 1"),
      wait(3).then(() => "task 2"),
    ]);

    console.log(result1, result2);
  } catch (error) {
    console.error("Error: ", error);
  }
}

main();

setTimeout(() => {
  console.log("run another log");
}, 2000);
*/

// 11 - reverse string

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
