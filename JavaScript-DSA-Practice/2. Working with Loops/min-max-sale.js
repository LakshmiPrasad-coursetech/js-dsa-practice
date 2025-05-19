let sales = [17.2, 18.5, 19.0, 20.1, 21.3, 22.4, 23.5, 24.6, 25.7, 26.8];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

let minIndex = -1;
let minValue = Number.POSITIVE_INFINITY; //sales[0]
// let minValue = sales[0];

let maxIndex = -1;
let maxValue = Number.NEGATIVE_INFINITY; //sales[0]
// let maxValue = sales[0];

for (let index = 0; index < sales.length; index++) {
    if (sales[index] < minValue) {
        minValue = sales[index];
        minIndex = index;
    }
    if (sales[index] > maxValue) {
        maxValue = sales[index];
        maxIndex = index;
    }
}

display("The minimum sale was " + minValue + " at index " + months(minIndex));
display("The maximum sale was " + maxValue + " at index " + months(maxIndex));