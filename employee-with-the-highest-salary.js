const employees = [
  { name: "John", dept: "IT", salary: 50000 },
  { name: "Sam", dept: "IT", salary: 90000 },
  { name: "Alice", dept: "HR", salary: 70000 },
  { name: "Bob", dept: "HR", salary: 60000 }
];

const output = employees.reduce((acc, curr) => {

    if (!acc[curr.dept]) {
        acc[curr.dept] = {
            name: curr.name,
            salary: curr.salary
        };
    } else if (curr.salary > acc[curr.dept].salary) {
        acc[curr.dept] = {
            name: curr.name,
            salary: curr.salary
        };
    }

    return acc;

}, {});

console.log(output);