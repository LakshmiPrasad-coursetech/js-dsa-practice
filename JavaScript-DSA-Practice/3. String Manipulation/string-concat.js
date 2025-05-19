// Your job is to implement the combineFirstAndLast() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function combineFirstAndLast(firstName, lastName) {
    // Your code goes here.
    return `${firstName} ${lastName}`;
    //return firstName.concat(' ', lastName);
    //return firstName + ' ' + lastName;
}


// This is how your code will be called.
// Your answer should be a single string combination of firstName and lastName.
// You can edit this code to try different testing cases.
const firstName = 'Barry';
const lastName = 'Berkman';
const result = combineFirstAndLast(firstName, lastName)