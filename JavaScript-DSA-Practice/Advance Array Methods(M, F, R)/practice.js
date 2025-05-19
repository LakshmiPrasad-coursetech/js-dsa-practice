const showExpectedResult = false;
const showHints = false;

//Applicants
const applicants = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 32 },
    { name: 'Cathy', age: 18 },
    { name: 'David', age: 15 }
];

function onlyOverEighteen() {
    // Filter the applicants array to include only those who are over 18 years old
    const overEighteen = applicants.filter((applicant) => {
        return applicant.age > 18;
        //return applicant.filter((app) => app.age > 18);
    });
}

//Sales 
const sales = [
    { name: "CoolShirt", sales: 200 },
    { name: "CoolShoes", sales: 500 },
    { name: "CoolHat", sales: 150 }
  ];

function totalSales() {
    // Calculate the total sales from the sales array
    const total = sales.reduce((accumulator, item) => {
        return accumulator + item.sales;
    }, 0);
    console.log(total);
    // return sales.reduce((accumulator, item) => accumulator + item.sales, 0);
}