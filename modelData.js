// todo: model for data
class Employees {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    return this;
  }
}

// todo: sum of salary
const sumOfSalary = (employees) => {
  let sum = employees.salary;

  employees.children.forEach((child) => {
    return (sum += sumOfSalary(child));
  });

  return sum;
};

// todo: log

const hossein = new Employees("Hossein", 53);
const ahmad = new Employees("Ahmad", 34);
const mahdi = new Employees("Mahdi", 43);
const reza = new Employees("Reza", 28);
const ali = new Employees("Ali", 26);
const sina = new Employees("Sina", 18);

hossein.addChild(ahmad).addChild(mahdi);
ahmad.addChild(reza);
mahdi.addChild(ali);
ali.addChild(sina);

console.log(mahdi);

console.log("Mahdi: ", 43 + 26 + 18);

console.log("Mahdi: ", sumOfSalary(mahdi));
