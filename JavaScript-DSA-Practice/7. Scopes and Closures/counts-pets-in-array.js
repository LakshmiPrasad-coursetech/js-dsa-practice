const showExpectedResult = false;
const showHints = false;

// Your job is to implement the countCats() function.
// The pets array has already been created in the tests.

function countCats(pets) {
    // Your code goes here.
    return petArray.filter(pets => pets.category === "CAT").length;
}

let petArray = [ { "id": "C-6", "name": "Buddy", "category": "CAT" }, { "id": "D-2", "name": "Archy", "category": "DOG" }, { "id": "D-8", "name": "Pax", "category": "DOG" }, { "id": "D-9", "name": "Lucie", "category": "DOG" }, { "id": "R-1", "name": "Pip", "category": "RABBIT" }, { "id": "C-4", "name": "Beebee", "category": "CAT" }, { "id": "R-5", "name": "Peep", "category": "RABBIT" }, { "id": "C-7", "name": "Mini", "category": "CAT" }, { "id": "D-7", "name": "Rainier McCheddarton", "category": "DOG" }, { "id": "D-5", "name": "Canela", "category": "DOG" }, { "id": "S-4", "name": "Pluto", "category": "STINGRAY" }, { "id": "D-4", "name": "Luna", "category": "DOG" }, { "id": "S-1", "name": "Lazer", "category": "STINGRAY" }, { "id": "C-2", "name": "Jungle", "category": "CAT" }, { "id": "R-2", "name": "Sweetums", "category": "RABBIT" }, { "id": "D-3", "name": "Otis", "category": "DOG" }, { "id": "R-3", "name": "Jerry", "category": "RABBIT" }, { "id": "C-1", "name": "Biscuit", "category": "CAT" }, { "id": "C-3", "name": "Benji", "category": "CAT" }, { "id": "C-5", "name": "Pillow", "category": "CAT" }, { "id": "D-6", "name": "Mehla", "category": "DOG" }, { "id": "D-1", "name": "Danton", "category": "DOG" }, { "id": "S-3", "name": "Steve", "category": "STINGRAY" }, { "id": "S-2", "name": "Switchblade", "category": "STINGRAY" }, { "id": "R-4", "name": "Jason", "category": "RABBIT" } ];
const result = countCats(petArray);
console.log(result); 