const one = 5;
const two = 10;
const total = one + two;
console.log(total);


let obj = {name: "John"};
obj.age = 30;
obj["city"] = "New York";

console.log(obj); // { name: 'John', age: 30, city: 'New York' }

const person = { name: "Alice", 
                    age: 25, 
                    greet: function() { 
                        console.log("Hello, my name is " + this.name); 
                    } 
                    };
person.greet(); // Hello, my name is Alice
