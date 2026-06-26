// 1. Use Switch to print day name based on number, number should taken from user using prompt
// let day = Number(prompt("Enter a number:"));
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }

// 2. Create and array of 5 numbers and print all using for loop and print user specfied number by taking a number from user using prompt
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// let index = Number(prompt("Enter the index number:"));
// if (index >= 0 && index < numbers.length) {
//     console.log("Selected Number:", numbers[index]);
// } else {
//     console.log("Invalid Index");
// }

// 3. Create a Function to find square of a number
// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// 4. Create a Funtion to find cube of a number
// function cube(num) {
//     return num * num * num;
// }
// console.log(cube(3));

// 5. convert the square and cube functions they should in all formats (function expression, declartion, arrow functions)
//function expression for square and cube.
// const square = function(num) {
//     return num * num;
// };
// console.log(square(4));

// const cube = function(num) {
//     return num * num * num;
// };
// console.log(cube(4));

//function declartion for square and cube.
// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// function cube(num) {
//     return num * num * num;
// }
// console.log(cube(3));

//arrow functions for square and cube.
// const squareArrow = (num) => num * num;
// console.log(squareArrow(4));

//const cubeArrow = (num) => num * num * num;
// console.log(cubeArrow(4));

// 6. Create an array with names and greet each name using a function
// let names = ["Gopi", "Ravi", "Sita", "Rahul", "Anu"];
// function greet(name) {
//     console.log("Hello " + name );
// }
// for (let i = 0; i < names.length; i++) {
//     greet(names[i]);
// }

// 7. Need create your own function and switch case
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operation = prompt("Enter the operator ");
function calculator(a, b, op) {
    switch (op) {
        case "+":
            console.log("Result:", a + b);
            break;
        case "-":
            console.log("Result:", a - b);
            break;
        case "*":
            console.log("Result:", a * b);
            break;
        case "/":
            if (b !== 0) {
                console.log("Result:", a / b);
            } else {
                console.log("Cannot divide by zero");
            }
            break;
        default:
            console.log("Invalid Operation");
    }
}
calculator(num1, num2, operation);
