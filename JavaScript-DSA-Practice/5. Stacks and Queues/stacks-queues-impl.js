const showExpectedResult = false;
const showHints = false;

//Scores
const scores = [10, 9, 8]

function addValueToArray() {
    return scores.push(7);
}

//Months
const months = ["February", "March", "April"]

function addToBeginning() {
    return months.unshift("January");
}


const result = addValueToArray();
console.log("Result of adding value to array", result);

const result2 = addToBeginning();
console.log("Result of adding to beginning", result2);