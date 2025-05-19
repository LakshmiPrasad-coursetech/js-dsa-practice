const bills = [1200, 29.99, 65.92, 17.32, 44.76, 5.99];
//Determine the total amount of all bills using the reduce method
const totalBills = bills.reduce((totalAccumulator, bill) => totalAccumulator += bill, 0);
console.log("The total amount of all bills is:" ,totalBills);