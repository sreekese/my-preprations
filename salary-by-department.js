const employees = [
  { name: "John", dept: "IT", salary: 50000 },
  { name: "Sam", dept: "HR", salary: 30000 },
  { name: "Alice", dept: "IT", salary: 70000 },
  { name: "Bob", dept: "HR", salary: 40000 },
  { name: "Tom", dept: "Finance", salary: 90000 }
];

const output = employees.reduce((acc,curr) => {
    if(acc[curr.dept]){
        acc[curr.dept] = 0;
    }

    acc[curr.dept] += curr.salary;
    return acc;
},{});

console.log(output);