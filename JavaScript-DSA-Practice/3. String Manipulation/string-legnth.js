// Your job is to implement the findPasswordLength() method. 
// Finding the length of a password is a common task in programming.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const success = "Success";
const needLongerPassword = "Password should be at least 8 characters";

function findPasswordLength(password) {
    // Your code goes here
  let outcome = password.length;
    if(outcome >= 8){
        return success;
    }else {
        return needLongerPassword;
    }

    // return password.length >=8 ? success : needLongerPassword;

}

// This is how your code will be called.
// Your answer should be the length of the password constant that is provided.
// You can edit this code to try different testing cases.
const password = 'Q+Csdsfsdfsfh';
const result = findPasswordLength(password);