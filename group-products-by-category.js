const products = [
{ name:"TV", category:"Electronics" },
{ name:"Laptop", category:"Electronics" },
{ name:"Soap", category:"Grocery" },
{ name:"Rice", category:"Grocery" }
];

const output = products.reduce((acc,curr) => {
    if(!acc[curr.category]){
        acc[curr.category] = [];
    }
    acc[curr.category].push(curr.name);
    return acc;
},{});

console.log(output);