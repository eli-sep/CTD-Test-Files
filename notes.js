//3 Ways to declare a variable & data types in JavaScript
//Avoid using var to prevent unintended behavior (eg. hoisting, variable shadowing, and writing to global scope.)
const firstName = "Elias"; //string
let age = 39;//number
var isOkToUse = false; //boolean

//String concatenation vs Template Literals
//The variable below display the same message
let greeting = "Hello, my name is " + firstName + " and I am " + age + " years old.";
let greetingTemplate = `Hello, my name is ${firstName} and I am ${age} years old.`;
console.log(greeting);
console.log(greetingTemplate);

//Naming Conventions
//camelCase, "is" or "has" for booleans, ALL_CAPS for constants, and descriptive names for variables and functions.
let camelCaseVariable = "This is camelCase";
let isStudent = true;
const MAX_USERS = 100;

//Conditional Statements
//The If statement reads: If the condition (age is greater than 18) is true then log  "You are an adult." to the console.
//Otherwise log "You are a minor." to the console.
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (firstName === "Elias") {
    console.log("Hello Elias!");
} else {
    console.log("Hello stranger!");
}

//Conditional Statement: A switch
//Switches are best used to check if a variable is equal to a specific value. Switch statements do not support >, <, etc. 
//To convert from an if statement: Change the if to switch. Keep the variable being checked in the parentheses.  In the curly braces, add case then the value to check for followed by a colon. Then add the code to execute if the case is true. End with a break statement. Add a default which is the same as the else statement in an if statement.

//The switch statement can be read: If firstName is equals the case "Elias" then log "Hello Elias!" to the console and exit the switch statement with the break statement. If firstName does not match any of the cases then use the default case and log "Hello stranger!" to the console.

switch (firstName) {
    case "Elias":
        console.log("Hello Elias!");
        break;
    default:
        console.log("Hello stranger!");
}

let thisIsAVariable = "This is a variable";
console.log(`This all is a string ${thisIsAVariable} and this is a string again.`);
console.log(`This all is a string ${2 + 5} and this is a string again.`);

//functions
//A function is a reusable block of code that performs a specific task. Functions can take parameters and return values. Functions can be declared using the function keyword or as an arrow function.

//function to arrow: function become const, place an equal sign after the function name, the parameters follow the equal sign in parentheses, add an arrow (=>) after the parentheses, and remove the curly braces and return statement if the function is a single expression.

function greet(name) {
    return `Hello, ${name}!`;
}

const greetArrow = (name) => `Hello, ${name}!`;

console.log(greet("Elias"));
console.log(greetArrow("Elias"));  



//`