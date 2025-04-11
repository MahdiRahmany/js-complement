class HashTable {
  constructor() {
    this.products = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;

    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);

    this.products[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);

    return this.products[keyHash];
  }
}

const message = "hello world";

function findFirstChat(str) {
  const table = new HashTable();

  for (const char of str) {
    if (table.get(char)) {
      return char;
    }
    table.set(char, 1);
  }
}

console.log(findFirstChat(message));
