const condiments = ['ketchup', 'mustard', 'relish', 'mayo', 'sriracha'];
//use the reverse method to reverse the order of the condiments array
console.log(condiments.reverse());

const employees = ['Adams', 'Baker', 'Clark', 'Davis', 'Evans'];
//use the reverse method to reverse the order of the employees array
//but do not change the original array or kep the original array
const reversedEmployees = [...employees];
console.log(reversedEmployees.reverse());
console.log(employees);