const words = ["apple","banana","watermelon","cat"];


const output = words.reduce((acc,curr) => {
    return acc = curr.length > acc.length ? curr : acc;
    return acc;
});

console.log(output);