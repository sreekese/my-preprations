function rotate(arr,n){
    n = n % arr.length;
    return arr.slice(-n).concat(arr.slice(0, -n)); 
}

const arr = [1, 2, 3, 4, 5];
const n = 2;

const rotatedArr = rotate(arr, n);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]