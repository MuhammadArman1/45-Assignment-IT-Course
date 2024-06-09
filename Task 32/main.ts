// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["arman", "alhan", "samad", "bilal", "ali"]
let new_users = ["ahmed", "razzaq", 'farooq', "yousuf", "arman", "bilal"]

for(let new_usersName of new_users){
  let new_usersName_lower = new_usersName.toLowerCase()
  let isUsed = false

  for(let current_usersName of current_users){
    if(current_usersName.toLowerCase() === new_usersName_lower){
      isUsed = true
      // break
    }
  }
  if (isUsed){
    console.log(`Sorry, ${new_usersName} is already taken. Please choose another username.`)
  } else{
    console.log(`Great, ${new_usersName} is available!`)
  }
}