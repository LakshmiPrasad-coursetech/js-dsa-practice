//string.startsWith() method
// Your job is to implement the isPhoneNumberValid() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const valid = 'Valid Phone Number';
const invalid = 'Invalid Phone Number';

function isPhoneNumberValid(phoneNumber) {
    // Your code goes here.
    return phoneNumber.startsWith('1-') && phoneNumber.length === 11 ? valid : invalid; 
}


// This is how your code will be called.
// Your answer should be an array that contains details about the matching details of the password variable provided.
// You can edit this code to try different testing cases.
const phoneNumber = '1-919-867-5309';
const result = isPhoneNumberValid(phoneNumber);