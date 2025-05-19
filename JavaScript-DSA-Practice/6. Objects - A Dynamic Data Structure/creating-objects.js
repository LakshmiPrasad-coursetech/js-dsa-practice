const obj1 = {first:"John", last: "Doe"};


const adult ={};
adult.first = "Jane";
adult.last = "Smith";
adult.age = 30;
adult.eyes = "blue";

console.log(adult);

//let person = Object.create(obj1);


function Person(first, last, age, eyes) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eyes = eyes;
}

const person = new Person("John", "Doe", 25, "green");
console.log(person);