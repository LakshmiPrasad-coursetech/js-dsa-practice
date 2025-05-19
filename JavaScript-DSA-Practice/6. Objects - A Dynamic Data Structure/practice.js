let pet1 = {
    name: "Buddy",
    species: "Dog",
    age: 5,
    bark: function() {
        console.log("Woof! Woof!");
        //return "Woof! Woof!";
    }
};

pet1.bark(); // Woof! Woof!
// let result = pet1.bark(); 
// console.log(result); - Woof! Woof!


// if i need to add a new property to the object
pet1.color = "Brown";

console.log(pet1); 