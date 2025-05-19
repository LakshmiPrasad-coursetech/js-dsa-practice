const freinds = [
  { name: "John", lastname: "Doe" },
  { name: "Jane", lastname: "Smith" },
  { name: "Alex", lastname: "Terax" },
];

//Create a new array with the full names of the friends
const fullNames = freinds.map((friend) => {
    return `${friend.name} ${friend.lastname}`;
    }
);

console.log(fullNames);