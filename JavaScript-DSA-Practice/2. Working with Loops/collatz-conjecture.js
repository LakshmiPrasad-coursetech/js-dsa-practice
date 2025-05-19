let number = parseInt(prompt("Enter a Integrer greater than zero: "));
display("Number starts at: " + number);

let steps = 0;
while (number !== 1) {
    if (number % 2 === 0) {
        number = number / 2;
    }else {
        number = (number * 3) + 1;
    }
    display("Number is now: " + number);
    steps++;
}
display("It took " + steps + " steps to reach 1.");