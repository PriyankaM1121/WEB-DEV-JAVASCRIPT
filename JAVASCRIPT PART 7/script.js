/*const student = {
  name: "Priyanka",
  age: 30,
  eng: 95,
  math: 99,
  phy: 97,

  clacAvg() {
    console.log(this);
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};

student.clacAvg();

//------------------------------------Arrow Function----------------------------------------
const sum = (a, b) => {
  console.log(a + b);
};

sum(2, 3);

const cube = (n) => {
  return n * n * n;
};

console.log(cube(2));

const pow = (a, b) => {
  console.log(a ** b);
};

pow(2, 4);

const hello = () => {
  console.log("hello world");
};

hello();

//---------------------------------Arrow function(implicit)------------------------------------

const mul = (a, b) => a * b;
console.log(mul(2, 3));

const cube1 = (n) => n * n * n;
console.log(cube1(8));

//-----------------------------Set Timeout------------------------------------

// console.log("Hi there!");

// setTimeout(() => {
//   console.log("Apna college");
// }, 4000);

// console.log("Welcome to");

//
//-----------------------------Set Interval------------------------------------

console.log("Hello");
const id = setInterval(() => {
  console.log("Priyanka");
}, 2000);

const id2 = setInterval(() => {
  console.log("Mahimn");
}, 1000);

clearInterval(id);
clearInterval(id2);

//-------------------------------this With Arrow functions----------------------------------

const student1 = {
  name: "Priyanka",
  marks: "99",
  prop: this, //global scop - window
  getName: function () {
    console.log(this);
    return this.name;
  },

  getMarks: () => {
    console.log(this); //Parent's scope : window object
    return this.marks;
  },

  getInfo: function () {
    setTimeout(() => {
      console.log(this); // student1
    }, 2000);
  },

  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // Window
    }, 2000);
  },
};

student1.getInfo(); // student - arrow function parent function is
// function () {
//   setTimeout(() => {
//     console.log(this); // student1
//   }, 2000);
// },
//and this above function THIS is our student1 object that's why we got here student1 object

student1.getInfo2(); // Window - for normal function THIS value is k jene ae function ne call karyo hoy
//here we calling back in setTimeout function and setTimeout function THIS value is WINDOW Onject because WINDOW object calls setTimeout function so here THIS value is WINDOW.

//Practice QS
//Q 1: Write an arrow function that returns the square of a number 'n'.

const square = (n) => n * n;

console.log(square(25));

//Q 2: Write a function that prints "Hello World" 5 times at intervals of 2s each.

const id3 = setInterval(function () {
  console.log("hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id3);
  console.log("Clear interval ran");
}, 10000);

//-------------------------------------Assignment----------------------------------------

//Qs1.Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

const arr = [10, 20, 30, 40, 50];

const arrayAvg = (array) => {
  let total = 0;
  for (num of array) {
    total += num;
  }
  let avg = total / array.length;
  return avg;
};

console.log(arrayAvg(arr));

// Qs2.Write an arrow function named is Even() that takes a single number as argument and returns if it is even or not.

const even = (n) => {
  if (n % 2 === 0) {
    return "Number is even number";
  } else {
    return "Number is odd number";
  }
};

console.log(even(12));

//Qs3.What is the output of the following code:
const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000); // Undefined
setTimeout(object.logMessage(), 1000); // "Hello,World!"

//Qs4.What is the output of the following code :
let length = 4;
function callback() {
  console.log(this.length);
}

const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object1.method(callback, 1, 2);
*/
