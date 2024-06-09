// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items:string[]){
    console.log("You ordered a sandwich with the following items:\n")
    for(let item of items){
        console.log(`- ${item}`);
    }
    console.log("\nYour sandwich is ready!\n");
    
}
sandwich("Garlic", "mayonnaise", "lettuce", "tomato", "onion" );
sandwich("Cheese", "Cucumber", "Mayonnaise", "Tomato" );
sandwich("Chicken", "Cucumber", "Cheese", 'Tomato', "Ketchup");