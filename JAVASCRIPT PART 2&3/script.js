console.log("Mahimn");
console.log("Priyanka");

let a = 10;
let b = 5;

// Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(a++);
console.log(++a);

console.log(a--);
console.log(--a);

//Traffic signal

// let color = prompt("Traffic signal light color:");

// if (color == "red") {
//   console.log("You have to stop your car.");
// } else if (color == "yellow") {
//   console.log("You have to go slow.");
// } else if (color == "green") {
//   console.log("GO");
// } else {
//   console.log("Traffic light is broken");
// }

// Calculate opcorn size

// let popcornSize = prompt(
//   "Please tell your popcorn size, so we will give the price for the same:"
// );

// if (popcornSize === "XL") {
//   console.log("Popcorn price is Rs. 250");
// } else if (popcornSize === "L") {
//   console.log("Popcorn price is Rs. 200");
// } else if (popcornSize === "M") {
//   console.log("Popcorn price is Rs. 100");
// } else if (popcornSize === "S") {
//   console.log("Popcorn price is Rs. 50");
// } else {
//   console.log("There is no available popcorn size");
// }

//Nnested if-else

// let marks = prompt("Marks:");

// if (marks >= 33) {
//   if (marks >= 80) {
//     console.log("Outstanding");
//   } else {
//     console.log("A");
//   }
// } else {
//   console.log("Better luck next time!");
//}

// start with small a and length should be > 3.

// let stringGood = prompt("Good string:");

// if (stringGood[0] === "a" && stringGood.length > 3) {
//   console.log("This is a good string");
// } else {
//   console.log("This is not a good string");
//}

let num = 12;

if (num % 3 === 0 && (num + 1 === 15 || num - 1 === 11)) {
  console.log("safe");
} else {
  console.log("unsafe");
}

//Switch statement

// let color = "green";

// switch (color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("go slow");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("Broken light");
// }

// let day = prompt("Weekday:");

// switch (day) {
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("Wednesday");
//     break;
//   case "4":
//     console.log("Thursday");
//     break;
//   case "5":
//     console.log("Friday");
//     break;
//   case "6":
//     console.log("Saturday");
//     break;
//   case "7":
//     console.log("Sunday");
//   default:
//     console.log("Wrong number!");
// }

//Alert and prompt

// let firstName = prompt("Enter first name:");

// let lastName = prompt("Enter last name:");

// let msg = `Welcome ${firstName} ${lastName}!`;
// alert(msg);

// Assignment

//1.
//Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not

// let num1 = prompt("Please enter number:");

// if (num1 % 10 === 0) {
//   console.log("Good");
// } else {
//   console.log("bad");
// }

//2. Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert (by substituting their name & age) : name is age years old.

// let userName = prompt("Username:");

// let age = prompt("Age:");

// let message = `${userName} is ${age} years old.`;
// alert(message);

//3.
// Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December

// let monthsQuarter = prompt("Quarter:");

// switch (monthsQuarter) {
//   case "1":
//     console.log("January, February, March");
//     break;
//   case "2":
//     console.log("April, May, June");
//     break;
//   case "3":
//     console.log("July, August, September");
//     break;
//   case "4":
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Wrong input");
// }

// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5. For a given string print if it is golden or not.

// let word = prompt("Please input the string:");

// if ((word[0] === "a" || word[0] === "A") && word.length > 5) {
//   console.log("It's a golden string");
// } else {
//   console.log("It's not a golden string");
//}

//. Write a program to find the largest of 3 numbers.

// let p = Number(prompt("Please input the number p:"));
// let q = Number(prompt("Please input the number q:"));
// let r = Number(prompt("Please input the number r:"));

// if (p > q && p > r) {
//   console.log("p is the largest number");
// } else if (q > p && q > r) {
//   console.log("q is the largest number");
// } else if (r > p && r > q) {
//   console.log("r is the largest number");
// } else {
//   console.log("There are wrong input");
// }
// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit. Eg : 32 and 47852 have the same last digit i.e. 2

// let number1 = Number(prompt("Please enter number1:"));
// let number2 = Number(prompt("Please enter number2:"));

// if (number1 % 10 === number2 % 10) {
//   console.log("It has the same last digit of these two numbers", number1 % 10);
// } else {
//   console.log("Not a same last digit");
// }

//Slice method

let msg = "ILoveCoding";

console.log(msg.slice(1, 5));

console.log(msg.replace("Love", "Do"));
console.log(msg.replace("o", "x"));

let fruit = "Mango";
console.log(fruit.repeat(5));

//Trinm it and convert it to upperCase

let msg1 = "help!";
console.log(msg1.trim().toUpperCase());

let nameCollege = "ApnaCollege";
console.log(nameCollege.slice(4, 9));
console.log(nameCollege.indexOf("na"));
console.log(nameCollege.replace("Apna", "our"));
console.log(nameCollege.slice(4).replaceAll("l", "t"));

//Creating Array

let marks = [99, 100, 98, 95, 96];
let names = ["Mahimn", "Priyanka", "Vishal"];
let info = ["Vishal", 26, 5.9];

let empArr = [];
console.log(names[0][0]);

//Arays are mutable

let fruits = ["Mango", "Banana", "Apple"];
fruits[0] = "Pineapple";
console.log(fruits);

fruits[10] = "Grapes";
console.log(fruits);

let cars = ["Honda", "BMW", "AUDI", "Ferrari"];
cars.push("Hundai"); // add to end
console.log(cars);
console.log(cars.pop()); // delete from end and returns it
console.log(cars);

cars.unshift("Tesla"); // add at first
console.log(cars);
console.log(cars.shift()); //delete from start and returns it
console.log(cars);

//Practice question
let start = ["January", "July", "march", "august"];

start.shift();
console.log(start);
start.shift();
console.log(start); // ["march", "august"]

start.unshift("june");
start.unshift("july");

console.log(start);

let primary = ["red", "yellow", "blue"];
//indexof
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));

//includes
console.log(primary.includes("blue"));
console.log(primary.includes("green"));

let secondary = ["orange", "green", "violet"];
//concatenation
console.log(primary.concat(secondary));

//reverse : its reverse(changed) the original array
console.log(primary.reverse());

//slice method, its only copies array not chnaged it
console.log(cars.slice(2));
console.log(cars);

//here also not included last index
console.log(cars.slice(2, 3));
console.log(cars.slice(-2));

//splice
let multiColors = ["red", "green", "yellow", "blue", "orange", "pink", "white"];
console.log(multiColors.splice(4));
console.log(multiColors);
console.log(multiColors.splice(0, 1));
console.log(multiColors);
console.log(multiColors.splice(0, 1, "grey", "black"));
console.log(multiColors);
console.log(multiColors.splice(0, 0, "purple"));
console.log(multiColors);
console.log(multiColors.splice(1, 0, "seagreen"));
console.log(multiColors);

//sort :only useful for alfabet or strings not on numbers
console.log(cars.sort());
let alfa = ["q", "w", "e", "t"];
console.log(alfa.sort());

let start1 = ["january", "july", "march", "august"];

console.log(start1.splice(0, 2, "july", "june"));

console.log(start1);

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"));

//Practice que

const ticTacToe = [
  ["x", null, "o"],
  [null, "x", null],
  ["o", null, "x"],
];

ticTacToe[0][1] = "o";
console.log(ticTacToe);

// Assignment

// Que :1
// Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2] and n= 3 Print,[7,9,0]

//let n = Number(prompt("index number"));

let array11 = [7, 9, 0, -2];
// console.log(array11[n]);
// console.log(array11.splice(n));
// console.log(array11);

// apnacollege solution
let n1 = 3;
let ans = array11.slice(0, n1);
console.log(ans);
// Qs2.Write a JavaScript program to get the last n elements of an array.[n can be any positive number].For example:for array [7,9,0,-2] and n=3 Print,[9,0,-2];
let ans1 = array11.slice(array11.length - n1);
console.log(ans1);
// Qs3.Write a JavaScript program to check whether a string is blank or not.

let str11 = prompt("write a strig:");

if (str11.length == 0) {
  console.log("string is empty.");
} else {
  console.log("string is not empty.");
}

// Qs4.Write a JavaScript program to test whether the character at the given(character)index is lower case.

let char = prompt("Write a character:");

let lowerChar = char.toLowerCase();

let upperChar = char.toUpperCase();
if (char === lowerChar) {
  console.log("Char is lower case.");
} else if (char === upperChar) {
  console.log("Its upper case character");
} else {
  console.log("Its camelcase character");
}

//let char11 = ["a", "b", "A", "D", "c"];

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
let string12 = prompt("write a sentance");

if (string12.includes(" ")) {
  console.log(`Original string = ${string12}`);
  console.log(string12.trim());
} else {
  console.log(`Original string = ${string12}`);
  console.log("there is no strip leading and trailing spaces availabel");
}

// Qs6.Write a JavaScript program to check if an element exists in an array or not.
let char11 = ["a", "b", "A", "D", "c", 123, 1, 23, 45];

let index11 = Number(prompt("Write an index:"));

if (char11.includes(char11[index11])) {
  console.log("Element is exist.");
} else {
  console.log("Element is not exist.");
}
