// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["arman", "alhan", "samad", "bilal", "ali"];
var new_users = ["ahmed", "razzaq", 'farooq', "yousuf", "arman", "bilal"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_usersName = new_users_1[_i];
    var new_usersName_lower = new_usersName.toLowerCase();
    var isUsed = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_usersName = current_users_1[_a];
        if (current_usersName.toLowerCase() === new_usersName_lower) {
            isUsed = true;
            // break
        }
    }
    if (isUsed) {
        console.log("Sorry, ".concat(new_usersName, " is already taken. Please choose another username."));
    }
    else {
        console.log("Great, ".concat(new_usersName, " is available!"));
    }
}
