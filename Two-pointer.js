const nums = [1,2,3,4,5,6,8,9];
const Target = 10;

function twoPointer(nums, Target){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const sum = nums[left] + nums[right];

        if(sum === Target){
            return [nums[left], nums[right]];
        } else if(sum < Target){
            left++;
        } else {
            right--;
        }
    }
}

console.log(twoPointer(nums, Target));