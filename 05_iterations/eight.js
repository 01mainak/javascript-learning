const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, current_value) {
//   console.log(`acc: ${accumulator} and currval: ${current_value}`);
//   return accumulator + current_value;
// }, 0); // here 0 is the initiator

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0); // @audit explicit return

//console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
