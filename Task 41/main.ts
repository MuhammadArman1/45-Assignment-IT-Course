// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians = ["Dynamo", "David Blaine", "Harry Houdini"];
function make_great(magicians:string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
make_great(magicians)