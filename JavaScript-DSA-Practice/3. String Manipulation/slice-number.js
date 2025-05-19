// Your job is to implement the function getAccountNumberLastFour() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function getAccountNumberLastFour(accountNumber) {
    // Your code goes here.
    return accountNumber.slice(5);
}


// This is how your code will be called.
// Your answer should be the last 4 digits of the account number string.
// You can edit this code to try different testing cases.
const accountNumber = '123456789'
const result = getAccountNumberLastFour(accountNumber)