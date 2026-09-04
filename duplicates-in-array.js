const nums = [4, 7, 2, 9, 7, 5, 2, 8];

const seen = new Set();

let result = null;

for (const num of nums) {
    if (seen.has(num)) {
        result = num;
        break;
    }
    seen.add(num);
}

console.log(result);