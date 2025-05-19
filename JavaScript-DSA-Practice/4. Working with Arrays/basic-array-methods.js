// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

//Classmates
const classmates = ["Debbie", "Meadow", "Jill", "Dylan"];

function howManyClassmates() {
    // This is a sample implementation to test your validators
    return classmates.length;
}

//Numbers
const numbers = [2, 3, 7, 15];
let start = 0;

function addUp() {
    // This is a sample implementation to test your validators
    numbers.forEach((number) => {
        start += number;
    }
);
    return start;

}

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = howManyClassmates();
const result1 = addUp();
console.log(result);
console.log(result1);