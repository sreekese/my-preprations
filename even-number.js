const num = [1,2,3,4,5,6,7];

const output = num.reduce((acc,curr) => {
    if(curr % 2 === 0){
        acc.push(curr);
    }
    return acc;
},[]);

console.log(output);