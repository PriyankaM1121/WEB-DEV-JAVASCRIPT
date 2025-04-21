//-------------------------------------FUNCTIONS-----------------------------------------
/*
function printPoem() {
  console.log("Twinkle Twinkle little star");
}

printPoem();

// Create a function to roll a dice & always display the value of the dice( 1 to 6).

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}

rollDice();

//---------------------------------- FUNCTIONS WITH ARGUMENTS --------------------------------
//Here (name) is argument
function printName(name, age) {
  console.log(`${name} age is ${age} year.`);
}

//here ("Mahimn Patel") is Parameter"
printName("Mahimn Patel", 1);

function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);
sum(3, 4);
sum(5, 6);

//Create a function that gives us the average of 3 numbers.

function calcAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

calcAvg(1, 2, 3);
calcAvg(4, 5, 6);
calcAvg(10, 20, 30);
*/
//Create a function that prints the multiplication table of a number.

function table(n) {
  for (let i = 1; i <= 10; i++) {
    let a = n * i;
    console.log(a);
  }
}

table(5);
table(7);

//--------------------------------------------Return------------------------------------------

function sum1(p, q) {
  return p + q;
}

console.log(sum1(2, 3));
const r = sum1(2, 3);
console.log(r);

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not Adult";
  }
}

console.log(isAdult(12));
console.log(isAdult(25));

// Create a function that returns the sum of numbers from 1 to n.

function sumOfn(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfn(5));
console.log(sumOfn(4));
console.log(sumOfn(7));

//Create a function that returns the concatenation of all strings in array.

let array = ["My", "name", "is", "Priyanka", "Patel"];

function sentance(str) {
  let result = "";
  for (word of str) {
    result = `${result} ${word}`;
  }
  return result;
}

console.log(sentance(array));

//Lexical scope

function outerFunc() {
  let x = 5;
  let y = 6;

  function innerFunc() {
    let a = 2;
    console.log(x);
    console.log(y);
  }
  // console.log(a); // Error : a is not defined
  innerFunc();
}

outerFunc();

const greet = "hello";

function changeGreet() {
  let greet = "Namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope
  }
}

console.log(greet);
changeGreet();

//-------------------------------Function Expression-----------------------------

let sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 3));

//------------------------------Highr order functions----------------------------

//1. Takes one or multiple functions as arguments

function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greeting = function () {
  console.log("hello");
};

multipleGreet(greeting, 5);

//2. Returns a function

function oddEvenFactory(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request");
  }
}

let request = "even"; //"odd"

const func = oddEvenFactory(request);
func(15);
func(50);
func(11);

//-------------------------------------------Methods in objects--------------------------------------

const calculator = {
  num: 55,
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator.sum(2, 3));
console.log(calculator.sub);

// shorthand for method in object
const calci = {
  num: 55,
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

console.log(calci.sum(2, 9));

//--------------------------------------Assignmet-----------------------------------------

//Qs1.Write a JavaScript function that returns array elements larger than a number.

let arrayEl = [8, 9, 10, 5, 4, 6, 3, 4, 9, 10, 15, 25, 20];
let num = 5;

function findLargeNumArray(array, num) {
  let largeNumArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      largeNumArr.push(array[i]);
    }
  }
  return largeNumArr;
}

console.log(findLargeNumArray(arrayEl, num));

//Qs2.Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueChar(str) {
  let charArray = [];
  for (char of str) {
    charArray.push(char);
  }
  console.log(charArray);
  let a = [];

  for (let i = 0; i < charArray.length; i++) {
    if (!a.includes(charArray[i])) {
      a.push(charArray[i]);
    }
  }
  return function () {
    let b = "";
    for (let i = 0; i < a.length; i++) {
      b += a[i];
    }
    return b;
  };
}

let func1 = uniqueChar(str);
console.log(func1());

//Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Example: country = ["Australia","Germany","United States of America"] output : "United States of America"

let country = ["Australia", "Germany", "United States of America", "India"];
let longestCountry = "";

function findLongCountryName(country) {
  for (let i = 0; i < country.length; i++) {
    if (country[i].length > longestCountry.length) {
      longestCountry = country[i];
    }
  }
  return longestCountry;
}

console.log(findLongCountryName(country));

// Qs4.Write a JavaScript function to count the number of vowels in a String argument.

// let str1 = prompt("Write a string:");

let count = 0;

function countVowels(str) {
  for (char of str.toLowerCase()) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels(str1));

// Qs 5.Write a JavaScript function to generate a random number within a range(start,end).

function randomNum(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

console.log(randomNum(10, 20));
