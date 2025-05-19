let a = parseFloat(prompt("Enter the value of a:"));
let b = parseFloat(prompt("Enter the value of b:"));
let c = parseFloat(prompt("Enter the value of c:"));

display("The quadratic equation is: " + a + "x^2 + " + b + "x + " + c + " = 0");
 let discriminant = b * b - 4 * a * c;

 if (discriminant < 0 ) {
     display("The equation has no real roots.");
 } else if (discriminant === 0) {
        let root = -b / (2 * a);
        display("The equation has one real root: " + root);
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        display("The equation has two real roots: " + root1 + " and " + root2);
    }