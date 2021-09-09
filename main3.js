class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "Unemployed";
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  occupation = "Student";
  greet() {
    super.greet();
    console.log(`and my occupation is ${this.occupation}`);
  }
}

let peopleArray = [];

let person1 = new Person("Skye");
let person2 = new Person("Abram");
let student1 = new Student("Jane");
let student2 = new Student("Joe");
peopleArray = [person1, person2, student1, student2];

peopleArray.forEach((el) => {
  console.log(el.name);
  el.greet();
});
