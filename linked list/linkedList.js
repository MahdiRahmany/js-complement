export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newElement = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newElement;
    }
    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  prepend(value) {
    const newElement = { value: value, next: this.head };

    this.head = newElement;

    if (!this.tail) {
      this.tail = newElement;
    }
  }

  insertAfter(value, afterValue) {
    const existingElement = this.find(afterValue);

    if (existingElement) {
      const newElement = { value: value, next: existingElement.value };
      existingElement.next = newElement;
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }

    let curElement = this.head;

    while (curElement) {
      if (curElement.value === value) {
        return curElement;
      }
      curElement = curElement.next;
    }

    return;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curElement = this.head;

    while (curElement.next) {
      if (curElement.next.value === value) {
        curElement.next = curElement.next.next;
      } else {
        curElement = curElement.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curElement;
    }
  }

  deleteHead() {
    if (!this.head) {
      return;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this.head;
  }

  toArray() {
    const newElements = [];

    let curElement = this.head;

    while (curElement) {
      newElements.push(curElement);
      curElement = curElement.next;
    }

    return newElements;
  }
}

// const linkedlist = new LinkedList();

// linkedlist.append(2);
// linkedlist.append("s");
// linkedlist.append(true);

// linkedlist.prepend("First Value");

// linkedlist.delete("s");

// console.log(linkedlist.toArray());
// console.log(linkedlist.find(2));

// linkedlist.insertAfter("new value", 2);
// console.log(linkedlist.toArray());
