let balanceString = prompt("Enter your balance:");
let balance = parseFloat(balanceString);

let amountString = prompt("Enter the amount you want to deposit:");
let amount = parseFloat(amountString);

if (amount >= 1000) {
    display("Funds may be on hold for three days");
}

balance += amount;
display("Your new balance is: " + balance);