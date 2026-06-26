//1.Print number from 1 to 10
//for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//whlieloop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//do while loop
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

//2.print even number from 2 to 20
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 3.Ask password untill correct
// using while loop
// let password = "";
// while (true) {
//     password = prompt("Enter your password:");
//     if (password === "admin123") {
//         console.log("Access Granted");
//         break;
//     } else {
//         console.log("Incorrect Password. Try again.");
//     }
// }

//4.Ask user two number using prompt convert to number and display sum
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// console.log("Sum =", num1 + num2);

//5.Age validator
// if age is less than 0 -> show invalid age
// if age is 18 or more -> show "Eligible to Vote"
// otehr wise -> show "Not eligible to vote"
// let age = Number(prompt("Enter your age:"));
// if (age < 0) {
//     console.log("Invalid age");
// } else if (age >= 18) {
//     console.log("Eligible to Vote");
// } else {
//     console.log("Not eligible to vote");
// }

// 6.Even or Odd Checker
// Check whether number is Odd or even
// let num = Number(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// 7.largest of Two Numbers
// Ask user two number and print the largest number
// if both are equal show "Both are equal"
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// if (num1 > num2) {
//     console.log(num1, "is largest");
// } else if (num2 > num1) {
//     console.log(num2, "is largest");
// } else {
//     console.log("Both are equal");
// }

// 8.Default Username (Nullish Colesching)
// let username = prompt("Enter username:");
// console.log(username ?? "Guest");

//9. Print Numbers from 1 to 10
// using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//10.Print Even Numbers using both for and while loops
//for loop
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
//while loop
// let i = 2;
// while (i <= 20) {
//     console.log(i);
//     i += 2;
// }

// 11.Countdown Using while
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//12. Print Numbers from 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
