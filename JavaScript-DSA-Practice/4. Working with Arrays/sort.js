const pets = ['cat', 'dog', 'fish', 'bird'];
//sort this array in alphabetical order
console.log(pets.sort());

const grade = [90, 100, 95, 85];
//sort this from highest to lowest
console.log(grade.sort((a, b) => b - a));

//sort this from lowest to highest
console.log(grade.sort((a, b) => a - b));