const nums = [3, 2, 4];
const target = 6;

function twonums(nums,target){
    const map = new Map();

    for(let i=0;i<nums.length; i++){

        const comp = target - nums[i];

        if(map.has(comp)){
            return [nums[map.get(comp)],nums[i]];
        }

        map.set(nums[i],i);
    }
}

console.log(twonums(nums, target));