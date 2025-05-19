const ages = [3, 10, 18, 20];
//how do we add 36 to the array?
ages.unshift(36);
console.log(ages);

const holidays = ["Easter", "Christmas", "New Year"];
//how do we remove the first element of the array?
//store the removed element in a variable
const shiftedValue = holidays.shift();
console.log("Shifted value", shiftedValue);
console.log("After shifting", holidays);