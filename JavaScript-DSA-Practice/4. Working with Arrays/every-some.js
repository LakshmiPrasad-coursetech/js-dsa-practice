const temps = [32, 45, 50, 60, 72, 85, 90];
//are some of the temps less than 70?


const states = ["Utah", "California", "Texas", "Florida", "New York"];
//do some of the states start with "New"?
const someStates = states.some((state) => state.startsWith("New"));
console.log(someStates); // true

//do every state start with "New"?
const everyStates = states.every((state) => state.startsWith("New"));
console.log(everyStates); // false