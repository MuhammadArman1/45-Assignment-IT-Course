// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Dynamo", "HARRY HOUDINI", "RICKY JAY", "JEAN HUGARD"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i], "\n");
    }
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
    return magicians;
}
make_great(magicians);
make_great(show_magicians(magicians));
export {};
