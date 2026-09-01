const num = [2, 3, 4, 5, 1, 0, 0];

const output = num.reduce((acc, curr) => {
    if (curr === 0) {
        acc.unshift(curr);
    } else {
        acc.push(curr);
    }

    return acc;
}, []);

console.log(output);