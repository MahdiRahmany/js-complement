import { LinkedList } from "./linkedList.js";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();

stack.push("product 1");
stack.push("product 2");
stack.push("product 3");

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());
