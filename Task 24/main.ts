// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let name = "Arman"
let number = 10
let array = [1, 2, 3, 4, 5]

console.log(name.toLowerCase() === "arman");
console.log(name.toLowerCase() !== "arman");

console.log(number <= 10);
console.log(number > 10);

console.log(array[2] < array[4] && array[3] <= array[3]);
console.log(array[2] < array[6] || array[3] <= array[5]);

