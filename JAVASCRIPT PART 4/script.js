/*
//--------------------------------------------FOR LOOP------------------------------------------

// Print all odd numbers (1 to 15)
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}

console.log("backwards");
for (let i = 15; i >= 1; i = i - 2) {
  console.log(i);
}

console.log(
  "---------------------------------------------------------------------"
);
// Print all odd numbers (2 to 10)

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}
console.log(
  "---------------------------------------------------------------------"
);
//Print the multiplicaton table for 5
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

// let n = Number(prompt("Please input number:"));
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++)
    console.log(`outer loop i ${i} value, inner loop j ${j} value`);
}

//---------------------------------------WHILE LOOP----------------------------------------
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Favorite Movie

const favoriteMovie = "Avatar";
let guess = prompt("Please guess your favorite movie:");

while (guess !== favoriteMovie) {
  if (guess == "quit") {
    console.log("You quit the game!");
    break;
  }
  guess = prompt("Wrong guess! Please try again");
}

if (guess == favoriteMovie) {
  console.log("Conratulation! you guessed correct movie!");
}

//Loops with arrays

let fruits = ["apple", "banana", "guava", "grapes", "kiwi", "lichi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i, fruits[i]);
}

//loops with nested arrays

let heros = [
  ["Ironman", "Thor", "Captain America"],
  ["Flash", "Wonder women", "Deadpul"],
];

for (let i = 0; i < heros.length; i++) {
  console.log(i, heros[i], heros[i].length);
  for (let j = 0; j < heros[i].length; j++) {
    console.log(heros[i][j]);
  }
}

let students = [
  ["priyanka", 95],
  ["Mahimn", 100],
  ["Vishal", 99],
];

for (let i = 0; i < students.length; i++) {
  console.log(` ${i + 1} Student details:`);
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
  

//---------------------------------------------FOR OF loop----------------------------------------------
let fruits1 = [
  "apple",
  "litchi",
  "pineapple",
  "banana",
  "orange",
  "guava",
  "cherry",
];

for (fruit1 of fruits1) {
  console.log(fruit1);
}

let string1 = "apnacollege";

for (char of string1) {
  console.log(char);
}

//Nested for-of loop

let heros1 = [
  ["ironman", "spiderman", "thor"],
  ["flash", "wonder woman", "superman"],
];

for (list of heros1) {
  console.log(list);
  for (hero of list) {
    console.log(hero);
  }
}

//-----------------------------------------TODO APP----------------------------------------

let todo = [];

let req = prompt("Please enter your request:");

while (true) {
  if (req == "quit") {
    console.log("You are quitting this app");
    break;
  }

  if (req == "list") {
    console.log("------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------------------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let index = Number(prompt("Please enter task index number:"));
    todo.splice(index, 1);
    console.log("task deleted");
    console.log(todo);
  } else {
    console.log("Wrong request!");
  }
  req = prompt("Please enter your request:");
}

*/

//Assignment

// Qs 1. Write a JS program to delete all occurrences of element ‘num’ in a given array.Example:if arr = [1,2,3,4,5,6,2,3] & num = 2 Result should be arr = [1,3,4,5,6,3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
//Qs2.Write a JS program to find the no of digits in a number. Example: if number = 287152, count = 6

// let number = prompt("Please enter the number"); //"287152";
// let count = 0;

// let i = 0;
// while (i < number.length) {
//   console.log(number[i]);
//   count++;
//   i++;
// }
// console.log(count);

//------------------- Apna college solution ----------------------
// let number = 287152;
// let count = 0;
// let copy = number;

// while (copy > 0) {
//   copy = Math.floor(copy / 10);
//   console.log(copy);
//   count++;
// }

// console.log(count);
//Qs3.Write a JS program to find the sum of digits in a number. Example: if number = 287152, sum = 25

// let number11 = prompt("Please etner the number"); //"287152";
// let sum = 0;

// let i = 0;
// while (i < number11.length) {
//   console.log(number11[i]);
//   sum += Number(number11[i]);
//   //console.log(sum);
//   i++;
// }

// console.log(sum);

//------------------- Apna college solution ----------------------

let number11 = 287152;
let sum = 0;
let copy11 = number11;

while (copy11 > 0) {
  copy11 = Math.floor(number11 % 10);
  console.log(copy11);
  sum = sum + copy11;

  number11 = Math.floor(number11 / 10);
}

console.log(sum);

// Qs4.Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example:7!(factorial of 7) = 1x2x3x4x5x6x7 = 50405!
// (factorial of 5) = 1x2x3x4x5 = 1203!
// (factorial of 3) = 1x2x3 = 60! Is always 1

// let n = prompt("Please enter a number:");
// let i = Number(n);
// let f = 1;

// // n! = 1x2x3x4x5x6x7.....n =.....

// while (i >= 1) {
//   f = f * i;
//   //console.log(f);
//   i--;
// }

//console.log(f);

//----------------------Apna college solution----------------------------

let n = 5;
let f = 1;
for (let i = 1; i <= n; i++) {
  f *= i;
}

console.log(f);

// Qs5.Find the largest number in an array with only positive numbers.

// let arrayp = [23, 21, 11, 4, 10, 100, 15, 25];
// let largeNum = 0;

// for (let i = 0; i < arrayp.length; i++) {
//   if (largeNum < arrayp[i]) {
//     largeNum = arrayp[i];
//   }
//   console.log(largeNum);
// }

// console.log(largeNum);
