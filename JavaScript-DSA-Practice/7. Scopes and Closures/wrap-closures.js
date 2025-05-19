const showExpectedResult = false;
const showHints = false;

function congratulate(user) {
    // Code here
    let sentence = "Congratulations";
    function createSentence() {
        // Construct sentence with sentence + user
        console.log(sentence += `, ${user}`);
    }
    return createSentence;
}

const firstName = "Jenny";
const congratulations = congratulate(firstName);
const result = congratulations(); 
