// Task 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let world = [" Palestine", " Dubai", " Antarctica", " Switzerland", " Saudi Arabia"]
console.log(`Original Order: ${world}`);
console.log(`Alphabetical Order: ${world.slice().sort()}`);
console.log(`Still Original Order: ${world}`);
console.log(`Reverse Alphabetical Order: ${world.slice().sort().reverse()}`);
console.log(`Again Still Original Order: ${world}`);
console.log(`Reverse Order: ${world.reverse()}`);
console.log(`Original Order: ${world.reverse()}`);
console.log(`Again Alphabetical Order: ${world.slice().sort()}`);
console.log(`Again Alphabetical Reverse Order: ${world.sort().reverse()}`);









