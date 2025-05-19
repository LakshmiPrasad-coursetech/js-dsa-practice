// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

//Fruits
const fruits = ["Apple", "Banana", "Cherry", "Mango"];

function includesApple() {
    return fruits.includes("Apple");
}

//Tasks
const tasks = [
    { name: "Do the laundry", completed: false },
    { name: "Buy groceries", completed: true },
    { name: "Read a book", completed: false },
    { name: "Walk the dog", completed: true }
  ];

function allTasksComplete() {
    return tasks.every((task) => task.completed);// !task.completed);
}

const result1 = allTasksComplete();
console.log(result1);

// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = includesApple();
console.log(result);