// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Arman", "Alhan", 'Samad'];
for (let i = 0; i < Guest.length; i++) {
    console.log(`Dear ${Guest[i]},\n I would like to invite you to dinner.\n Please let me know if you are available.\n Thank you.`);
}
export {};
