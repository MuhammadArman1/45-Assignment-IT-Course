// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest = ["Arman", "Alhan", "Samad"];

Guest.unshift("Ali");
Guest.push("Ahmed");
Guest.splice(2, 0, "Bilal");
for (let i = 0; i < Guest.length; i++) {
  console.log(`Hello ${Guest[i]},\n I would love to invite you to dinner. Please let me know if you are available. Best regards`);
}

console.log("\nI just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests");

while (Guest.length > 2) {
  console.log(`Dear ${Guest.pop()}\n Sorry, I won’t be able to invite you to dinner after all\n`);
}
for (let i = 0; i < Guest.length; i++) {
  console.log(`Hello ${Guest[i]},\n you are still invite for dinner`);
}
