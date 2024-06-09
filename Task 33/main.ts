// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let ordinalNumber = ""

for (let number of Number){
    if (number === 1){
        ordinalNumber = "st"
    } else if (number === 2){
        ordinalNumber = "nd"
    } else if (number === 3){
        ordinalNumber = "rd"
    } else if (number === 4){
        ordinalNumber = "th"
    } else if (number === 5){
        ordinalNumber = "th"
    } else if (number === 6){
        ordinalNumber = "th"
    } else if (number === 7){
        ordinalNumber = "th"
    } else if (number === 8){
        ordinalNumber = "th"
    } else {
        ordinalNumber = "th"
    }
    console.log(`${number}${ordinalNumber}`)
}