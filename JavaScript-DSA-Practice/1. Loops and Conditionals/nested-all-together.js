let balance = parseFloat(prompt("Enter your balance:"));
let transaction = prompt("Enter the transaction amount:");

if (transaction == "D" || transaction == "d") {
    let amount = parseFloat(prompt("Enter the amount to deposit:"));
    if (amount < 0) {
        display("Invalid amount");
    } else if (amount >= 1000) {
        display("Funds may be on hold for three days");
        balance += amount;
        display("Your new balance is: " + balance);
    }
}else if (transaction == "W" || transaction == "w") {
    let amount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (amount < 0) {
        display("Invalid amount");
    } else if (amount > balance) {
        display("Insufficient funds");
    } else {
        balance -= amount;
        display("Your new balance is: " + balance);
    }
} else {
    display("Invalid transaction type");
    display("Transaction type must be either D or W");
}