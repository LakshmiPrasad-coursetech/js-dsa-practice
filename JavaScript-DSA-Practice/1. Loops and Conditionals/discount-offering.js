let price = parseFloat(prompt("Enter the price of the item:"));
let age = parseInt(prompt("Enter your age:"));
let discount = 0;

if (age <= 21 || age >= 65) {
    discount = 0.10; // 10% discount
}else {
    discount = 0.05; // 5% discount
}

display("Your discount is: " + (discount * 100) + "%");
let discountedPrice = price - (price * discount);
display("The price after discount is: " + discountedPrice);