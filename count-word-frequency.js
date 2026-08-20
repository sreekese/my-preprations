const sentence = "javascript is fun javascript is powerful";

const output = sentence.split(" ").reduce((acc,curr) => {
    if(!acc[curr]){
        acc[curr] = 0;
    }

    acc[curr] += 1;
    return acc;
},{});

console.log(output);