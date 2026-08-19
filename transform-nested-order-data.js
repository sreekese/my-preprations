const orders = [
  {
    customer: "John",
    items: [
      { name: "Book", qty: 2, price: 300 },
      { name: "Pen", qty: 5, price: 20 }
    ]
  },
  {
    customer: "Alice",
    items: [
      { name: "Bag", qty: 1, price: 1000 },
      { name: "Book", qty: 1, price: 300 }
    ]
  }
];

const output = orders.reduce((acc,curr) => {
    
    if(!acc[curr.customer]){
        acc[curr.customer] = 0;
    }

    const op = curr.items.reduce((acc,curr) => {
        acc += curr.price * curr.qty;
        return acc;
    },0);

    acc[curr.customer] = op;

    return acc;

},{});

console.log(output);