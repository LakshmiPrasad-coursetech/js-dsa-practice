// Your job is to implement the splitEmails() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function splitEmails(emailList) {
    // Your code goes here.
    return emailList.split(', ');
}

// This is how your code will be called.
// Your answer should be the largest value in the emailList array.
// You can edit this code to try different testing cases.
const emailList = 'logan@wsr.com, kendall@wsr.com, roman@wsr.com, shiv@wsr.com';
const result = splitEmails(emailList);