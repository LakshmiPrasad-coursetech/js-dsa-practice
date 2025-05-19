const scores = [10, 20, 30, 40, 50];
const elements = ['ruby', 'python', 'javascript', 'java'];
//Does the score array include the number 20?

const includesTwenty = scores.includes(20);
const includesRuby = elements.includes('ruby');
const includesRuby1 = elements.includes('Ruby');
console.log(includesTwenty); // true
console.log(includesRuby); // true
console.log(includesRuby1); // false