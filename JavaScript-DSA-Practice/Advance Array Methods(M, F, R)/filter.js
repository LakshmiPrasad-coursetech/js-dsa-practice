const groceries = [
    { name: 'milk', type: 'dairy'},
    { name: 'bread', type: 'grain'},
    { name: 'cheese', type: 'dairy'},
    { name: 'apple', type: 'fruit'},
    { name: 'banana', type: 'fruit'},
];

//Filter the following array to include only those items that are of type 'fruit'
const fruites = groceries.filter((item) => {
    return item.type === 'fruit';
});
console.log(fruites);