function findSmallest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return false;
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest([10, 5, 8, 2, 15, 3]));