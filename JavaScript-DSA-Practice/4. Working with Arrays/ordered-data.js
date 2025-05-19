// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

//Cities
const cities = ["New York", "Chicago", "Salt Lake City", "Nashville", "Raleigh"];

//Sort
function sortCitiesAlphabetically() {
    return cities.sort();
}

//Products
const products = [
    {
      name: "Wireless Mouse",
      price: 25.99,
      inStock: true
    },
    {
      name: "Mechanical Keyboard",
      price: 89.99,
      inStock: false
    },
    {
      name: "USB-C Hub",
      price: 45.50,
      inStock: true
    },
    {
      name: "Bluetooth Speaker",
      price: 60.00,
      inStock: true
    }
  ];

//Sort
function findSpecificProduct() {
    return products.find((product) => product.name === "USB-C Hub");
}


// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = sortCitiesAlphabetically();
console.log(result);
const result1 = findSpecificProduct();
console.log(result1);