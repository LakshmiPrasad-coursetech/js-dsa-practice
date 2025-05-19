let month = parseInt(prompt("Enter the month number (1-12):"));
let year = parseInt(prompt("Enter the year:"));
let days = 0;

switch (month) {
    case 9:
    case 4:
    case 6:
    case 11:
        days = 30;
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
        case 12:
        days = 31;
        break;
    case 2:
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days = 29; // Leap year
        } else {
            days = 28; // Non-leap year
        }
        break;
    default: 
    display("Invalid month number");
    break;
}

if (days > 0) {
    display("The month " + month + " of year " + year + " has " + days + " days.");
}