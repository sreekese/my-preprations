const users = [
  {name:"John", age:20},
  {name:"Sam", age:20},
  {name:"Bob", age:25},
  {name:"Alice", age:25},
  {name:"Tom", age:30}
];


const output = users.reduce((acc,curr) =>{
    if(!acc[curr.age]){
        acc[curr.age] = [];
    }
    acc[curr.age].push(curr.name);
    return acc;
},{});

console.log(output);