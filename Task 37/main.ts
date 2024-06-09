// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.fun

function make_shirt(size = "small", print = "Don't waste your Time"){
    console.log(`The shirt is ${size} and it says "${print}"`)
}
make_shirt()
make_shirt("medium", "I love Typescript")
make_shirt("large", "I love Typescript")
