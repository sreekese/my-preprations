const arr = [1, 2, 3, 4, 5, 1, 2, 3, 1];

const output = arr.reduce((acc,curr) => {
    if(!acc[curr]){
        acc[curr] = 0;
    }
    
    acc[curr]++;
    return acc;
},{});

console.log(output);