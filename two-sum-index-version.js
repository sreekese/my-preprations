function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }

        seen.set(nums[i], i);
    }

    return null;
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));