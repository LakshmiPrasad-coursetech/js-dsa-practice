// Write your answer here, and then test your code.
// Your job is to implement the hasFun() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const positive = 'positive';
const negative = 'negative';

function hasFun(message) {
    // Your code goes here.
    return message.includes('fun') ? positive.toUpperCase : negative;
}

// This is how your code will be called.
// Your answer should return a boolean indicating whether or not 'fun' is in the message.
// You can edit this code to try different testing cases.
const message = "That party was a lot of fun."
const result = hasFun(message)