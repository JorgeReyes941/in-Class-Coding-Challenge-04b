let const product = [
{   sku: sku_001,
    name: "Ipad",
    category: "handheld",
    price: 400,
    inventory: 100

},

{
    sku: sku_002,
    name: "macbook",
    category: "pc",
    price: 2000,
    inventory: 101
},

{
    sku: sku_003,
    name: "Iphone",
    category: "phone",
    price: 1000,
    inventory: 102
},

{
    sku: sku_004,
    name: "Ipod",
    category: "old tech",
    price:10000,
    inventory: 10

},

{
    sku: sku_005,
    name: "airpods",
    category: "headphones",
    price: 2000,
    inventory: 1003

}
];

for (const product of products) {
  let discountRate = 0;

  switch (product.category) {
    case "Magical/Gross":
        discount = 0.1
        break;
    case "magica"
    