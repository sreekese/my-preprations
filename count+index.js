//Given an array of integers, count the element with odd index and odd value,
//and the element with even index and even value. return the total count. [2,1,4,3,6,5]

const arr = [2,1,4,3,6,5];

function countElement(arr){
    let count =0;

    for(let i =0 ; i< arr.length; i++){
        if(i % 2 === 0 && arr[i] % 2 === 0){
            count++;
        } else if(i % 2 !== 0 && arr[i] % 2 !== 0){
            count++;
        }
    }
    return count;
}

console.log(countElement(arr));