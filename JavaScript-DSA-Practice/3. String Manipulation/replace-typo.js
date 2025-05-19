// Your job is to implement the fixTypo() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function fixTypo(emailList) {
    // Your code goes here.
    return emailList.replace('pgn.com', 'atn.com');
}

// This is how your code will be called.
// Your answer should be an update version of the message below, where Dwigt is replaced with Dwight.
// You can edit this code to try different testing cases.
const emailList = 'tom@atn.com, greg@pgn.com, cyd@atn.com, gerri@atn.com';
const result = fixTypo(emailList);