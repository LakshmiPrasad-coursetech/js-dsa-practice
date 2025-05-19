// trim th empty spaces from the beginning and end of a string
// Your job is to implement the trimPasswordString() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function trimPasswordString(generatedPassword) {
    // Your code goes here
    console.log(generatedPassword.length);
    let trimmedPassword = generatedPassword.trim();
    console.log(trimmedPassword);

    //return generatedPassword.trim();
}



// This is how your code will be called.
// Your answer should be a trimmed version of the generatedPassword variable.
// You can edit this code to try different testing cases.
const generatedPassword = ' 9vud9z9WTb5Re9utcb8bcmxXgccCo6VUi ';
const result = trimPasswordString(generatedPassword);