//Question no 1
var num = 20 + prompt("enter your number");
if (num % 100 == 0) {
    console.log("number is divisible by 100")
} else {
    console.log("number is not divisible by 100")
}
//Qno2
var num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is an odd number.`);
}

// Qno3

var age = 20;

if (age > 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}



// Qno 4

let myName = "Abdul Rehman";
let userName = prompt("Enter your name:");

if (userName === myName) {
    console.log("Hello, Abdul Rehman! It's great to meet you!");
}

// Qno 5

let num = parseInt(prompt("Enter a number:"));

if (num % 3 === 0) {
    console.log("Number is divisible by 3");
} else {
    console.log("Number is not divisible by 3");
}

// Qno6

var input = prompt("Enter a character:");

// Convert the input to its A code
var a = input.charCodeAt(0);

// Check if the input is a number (48-57), uppercase letter (65-90), or lowercase letter (97-122)
if (a >= 48 && a <= 57) {
    console.log("Input is a number.");
} else if (a >= 65 && a <= 90) {
    console.log("Input is an uppercase letter.");
} else if (a >= 97 && a <= 122) {
    console.log("Input is a lowercase letter.");
} else {
    console.log("Input is not a number, uppercase letter, or lowercase letter.");
}




// qno10


var correctPassword = "password123";

// Ask user to enter password
var userPassword = prompt("Enter your password:");

// Validate passwords
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// qno11

var firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
} else {
    document.write("You are not Fahad.");
}



// qno12

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// q no 13
let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log(`The larger number is: ${num1}`);
} else if (num2 > num1) {
    console.log(`The larger number is: ${num2}`);
} else {
    console.log("The two integers are equal.");
}


// Qno16

var value = 42; // Change this value to test different types

if (typeof value === "number") {
    console.log("The type of the variable is number.");
} else if (typeof value === "string") {
    console.log("The type of the variable is string.");
} else if (typeof value === "boolean") {
    console.log("The type of the variable is boolean.");
} else if (typeof value === "undefined") {
    console.log("The type of the variable is undefined.");
} else {
    console.log("The type of the variable is not number, string, boolean, or undefined.");
}

// Qno18

console.log(10 != 8); // This will display "true"


// Qno19


var monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number.");
}




// Qno20

let age = 16;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable); // Output: "Too young"