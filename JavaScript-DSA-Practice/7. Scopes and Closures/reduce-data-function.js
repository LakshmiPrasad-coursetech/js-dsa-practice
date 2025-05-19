const showExpectedResult = false;
const showHints = false;

function outfitCost(outfitDetails) {
    // Your code goes here.
    return outfitDetails.reduce((acc, item) => {
        if (item.inventory) {
            return acc + outfitCost(item.inventory);
        }
        return acc + item.price;
        
    }, 0);

}
const outfit = [
    { name: "Cool Hat", price: 20 },
    { name: "Cool Tee Shirt", price: 25 },
    {
      category: "Accessories",
      inventory: [
        {
          name: "Cool Sunglasses",
          price: 150,
        },
        {
          name: "Cool Watch",
          price: 400,
        },
        {
          category: "Jewelry",
          inventory: [
            {
              name: "Cool Earrings",
              price: 25,
            },
            {
              name: "Cool bracelet",
              price: 40,
            },
            {
              name: "Cool Necklace",
              price: 80,
            },
          ],
        },
        {
          name: "shorts",
          price: 42,
        },
        {
          name: "flip flops",
          price: 22,
        },
      ],
    },
  ];

const result = outfitCost(outfit);
console.log(result); 