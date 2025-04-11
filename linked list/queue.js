import { LinkedList } from "./linkedList.js";

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.prepend(value);
  }

  dequeue() {
    this.items.deleteHead();
  }

  toArray() {
    return this.items.toArray();
  }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(9);

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());
