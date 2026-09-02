const nums = [3, 2, 8, 4, 7, 11];
const target = 9;

function twoPointer(nums,target){
    const seen = new Set();

    for(const num of nums){
        const needed = target-num;
        if(seen.has(needed)){
            return[needed,num];
        }
        seen.add(num);
    }

    return null;
}

console.log(twoPointer(nums,target));