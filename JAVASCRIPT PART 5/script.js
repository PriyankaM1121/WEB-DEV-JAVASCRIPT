/*const student = {
  name: "Priyanka",
  branch: "EC",
  Year: "2015",
  age: 30,
  city: "Gandhinagar",
};

const post = {
  username: "@priyanka",
  content: "This is my #first post",
  likes: 150,
  repost: 5,
  tags: ["@vishal", "@mahimn"],
};

const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

//Notes : JS automatically converts objects keys to strings. Even if we made the number as a key, the number will be converted to string

student.gender = "female";
console.log(student);

student.city = "Ahmedabad";
console.log(student);

//Nested objects
const classInfo = {
  priyanka: {
    marks: "A",
    city: "Gandhinagar",
  },
  Mahimn: {
    marks: "O",
    city: "Mumbai",
  },
  vishal: { marks: "A+", city: "Pune" },
};

console.log(classInfo.priyanka.city);
classInfo.priyanka.city = "Mumbai";
console.log(classInfo);

const studentInfo = [
  {
    name: "Priyanka",
    grade: "A",
    city: "Ankleshwar",
  },
  {
    name: "Mahimn",
    grade: "o",
    city: "Ahmedabad",
  },
  {
    name: "Vishal",
    grade: "A+",
    city: "Pune",
  },
];

studentInfo[0].gender = "female";

console.log(studentInfo);
studentInfo[0].city = "Ahmedabad";
console.log(studentInfo);

//Generate random number b/w 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//Generate random number b/w 1 to 100
let random100 = Math.floor(Math.random() * 100) + 1;
console.log(random100);

//Generate random number b/w 1 to 5

let random5 = Math.floor(Math.random() * 5) + 1;
console.log(random5);

//Generate random number b/w  21 to 25
let random21 = Math.floor(Math.random() * 5) + 21;
console.log(random21);

//-----------------------------------------Guessing Game-------------------------------------------
//User enters a max number & then tries to guess a random generated number between 1 to max.

let maxNum = prompt("Please enter the max number:");
//console.log(maxNum);

let randomNum = Math.floor(Math.random() * maxNum) + 1;
//console.log(randomNum);

let guessNum = prompt("Please guess the number:");

while (true) {
  if (guessNum == "quit") {
    console.log("You quit the game");
    break;
  }

  if (guessNum == randomNum) {
    console.log(
      `Congrats!! You guess correct number, random number is ${randomNum}`
    );
    break;
  } else if (guessNum < randomNum) {
    guessNum = prompt("You guess too small number! Please try again!");
  } else {
    guessNum = prompt("You guess too large number! Please try again!");
  }
}
*/

//Assignment question

//Qs1. Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//Qs2. Create an object representing a car that stores the following properties for the car: name, model, color Print the car’s name.

const car = {
  name: "Range Rover",
  model: "The Land Rover Range Rover",
  owner: "Mahimn Patel",
  color: "white",
};

console.log(car.name);

// Qs3.Create an object Person with their name, age and city. Edit their city’s original value to change it to “NewYork”. Add a new property country and set it to the United States.

const person = {
  name: "Mahimn Patel",
  age: "1 year",
  city: "Ankleshwar",
};

person.city = "Newyork";
person.country = "United States";
console.log(person);
