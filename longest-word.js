const words = ["apple","banana","watermelon","cat"];


const output = words.reduce((acc,curr) => {
    return acc = curr.length > acc.length ? curr : acc;
});

console.log(output);