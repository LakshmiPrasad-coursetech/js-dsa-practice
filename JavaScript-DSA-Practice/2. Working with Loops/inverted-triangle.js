let nRows = 0;
do {
    nRows = parseInt(prompt("Enter the number of rows: "));
    if (nRows < 1 || nRows > 10) {
        display("Please enter a number between 1 and 10.");
    }
}while (nRows < 1 || nRows > 10);

for (let row = 0; row < nRows; row++) {
    let outputString = "";
    let nSpaces = row;
    for (let space = 0; space < nSpaces; space++) {
        outputString += " ";
    }
    let nPlusSigns = (2 * nRoes -1) - (2 * row);
    for (let plusSign = 0; plusSign < nPlusSigns; plusSign++) {
        outputString += "+";
    }
    display(outputString);
}