const arr = [5, "banana", 2, "apple", 8, "cat", 1, "dog"];

function sorting(arr){
    return arr.reduce((acc,curr) => {
        if(typeof curr === "string"){
            acc.push(curr);
        }
        return acc;
    },[]);
}

console.log(sorting(arr));