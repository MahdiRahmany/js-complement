const number = ["John:123-456-7890", "Jane:987-654-3210", "Joe:555-555-5555"];

function phoneDirectory(arr) {
  const map = new Map();

  for (const item of arr) {
    const [name, phone] = item.split(":");
    map.set(name, phone);
  }

  return map;
}

const result = phoneDirectory(number);

console.log(result.get("John"));
