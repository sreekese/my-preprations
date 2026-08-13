const arr = [1, [2, [3, [4]], 5], 6];

function flattern(arr){
    return arr.reduce((acc,curr) => {
        
        if(Array.isArray(curr)){
            return acc.concat(flattern(curr));
        }
        acc.push(curr);

        return acc;
    },[])
}

console.log(flattern(arr));