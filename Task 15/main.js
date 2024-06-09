// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let Guest = ["Arman", "Alhan", 'Samad'];
for (let i = 0; i < Guest.length; i++) {
    console.log(`Dear ${Guest[i]}, I am inviting you to dinner.`);
}
console.log(`\nUnfortunately ${Guest[2]} can't not come to dinner.`);
console.log("I invite for new guest.\n");
Guest[2] = "Ali";
for (let i = 0; i < Guest.length; i++) {
    console.log(`Dear ${Guest[i]}, I am inviting you to dinner.`);
}
export {};
