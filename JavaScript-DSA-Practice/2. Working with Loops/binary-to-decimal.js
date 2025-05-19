let binaryString = prompt("Enter a binary number: ");
let decimalValue = 0;
let factore = 1;

for (let index = binaryString.length - 1; index >= 0; index--) {
    let char = binaryStr[index];
    if (chr =="1" || char == "0") {
    let digit = parseInt(char);
    decimalValue += digit * factor;
    factore *= 2;
}else {
    display("Invalid binary number.");
}
    }

display("The decimal value of " + binaryString + " is " + decimalValue);