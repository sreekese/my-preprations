const string = "Blue is the color of the sky";

const output = string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

const reverse = output.split(" ").reverse().join(" ");

console.log(reverse);
