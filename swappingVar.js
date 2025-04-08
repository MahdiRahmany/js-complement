let a = 10;
let b = 20;

// let c = a; // c = 10
// a = b; // a = 20
// b = c; // b = 10

// [a, b] = [b, a];

a = a + b; // a = 30
b = a - b; // b = 10
a = a - b; // a = 20

console.log(a, b);
