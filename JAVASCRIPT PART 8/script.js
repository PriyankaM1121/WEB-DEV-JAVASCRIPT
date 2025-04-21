//
let arr = [1, 2, 3, 4, 5];

//-------------------by normal function---------------------
console.log("Normal function");
arr.forEach(function (el) {
  console.log(el);
});

console.log("Arrow function");
arr.forEach((el) => console.log(el));

console.log("Function Expression");
const print = function (el) {
  console.log(el);
};

arr.forEach(print);

const studentDetails = [
  { name: "Priyanka", marks: 94 },
  { name: "Mahimn", marks: 99 },
  {
    name: "Vishal",
    marks: 98,
  },
];

studentDetails.forEach((student) => console.log(student.marks));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = array.map((el) => el * 2);

console.log(double);

let gpa = studentDetails.map((student) => student.marks / 10);
console.log(gpa);

let evenNum = array.filter((el) => el % 2 == 0);
console.log(evenNum);

let arr1 = [2, 4, 34, 36];

console.log(arr1.every((el) => el % 2 == 0));
let arr2 = [2, 3, 34, 36];
console.log(arr2.every((el) => el % 2 == 0));

//-------------------------------------- Reduce method ---------------------------------------

const arr3 = [1, 2, 3, 4];
const finalVal = arr3.reduce((res, el) => res + el);
console.log(finalVal);

//Finding maximum using REDUCE method

//normal
let arr4 = [1, 5, 8, 9, 10, 100, 15, 15, 210, 110, 230];
// let max = 0;

// for (let i = 0; i < arr4.length; i++) {
//   if (max < arr4[i]) {
//     max = arr4[i];
//   }
// }
// console.log(max);

let max = arr4.reduce((acc, el) => {
  if (acc < el) {
    return el;
  } else {
    return acc;
  }
});

console.log(max);

//-----------------------------Practice que---------------------------------------

// Q 1:Check if all numbers in our array are multiplies of 10 or not.

let arr5 = [10, 20, 30, 40, 50];

let ans = arr5.every((el) => el % 10 == 0);
console.log(ans);

//Q 2:Create a function to find the min number in an array.

const getMin = function (array) {
  let min = array.reduce((acc, el) => {
    if (acc < el) {
      return acc;
    } else {
      return el;
    }
  });
  return min;
};

console.log(getMin(arr5));

//--------------------------------------Default Parameter----------------------------------

const sum = function (a, b = 3) {
  return a + b;
};

console.log(sum(5)); //8 --> a=5, b=3
console.log(sum(1, 2)); //3 --> a=1, b=2

const sum1 = function (a = 2, b) {
  return a + b;
};

console.log(sum1(4)); //NaN --> a=4, b=undefined

//---------------------------------------Spread--------------------------------------------------

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr6);
console.log(...arr6);

console.log(Math.min(...arr6));
console.log(..."Priyanka");

//-------------------------------------Spread (Aarray Literals)------------------------------------

let arr7 = [1, 2, 3, 4, 5];
let newArr = [...arr7];

console.log(newArr);

let char = [..."hello"];
console.log(char);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];
console.log(nums);

//-------------------------------------Spread (Object Literals)------------------------------------
let data = {
  email: "priyanka@gmail.com",
  password: "abcd",
};

let dataCopy = { ...data, id: 123, country: "India" };

console.log(dataCopy);
let arr8 = [1, 2, 3, 4, 5, 7, 7];
let obj1 = { ...arr8 };
console.log(obj1); // Index= key & value = array value

let obj2 = { ..."hello" }; // Index= key & value = string character
console.log(obj2);

//--------------------------------------Rest -------------------------------------------

function min() {
  console.log(arguments); //arguments is not actactly array so we have to collect this arguments in array to use array method so we collect arguments by REST, REST collect all argments in single array
  console.log(arguments.length);
}
min(1, 2, 3, 4);

const sum2 = function (...args) {
  //argumnets
  // for (let i = 0; i < args.length; i++) {
  //   console.log("You gave us:", args[i]);
  // }
  let sum = args.reduce((acc, el) => acc + el);
  return sum;
};

console.log(sum2(1, 2, 3, 4));

//If you want to add more parameters the you should put it before ...args(rest) bcz after ...args(rest) it is not considered.
function maximum(msg, ...args) {
  console.log(msg);
  return args.reduce((max, el) => {
    if (max > el) {
      return max;
    } else {
      return el;
    }
  });
}
console.log(maximum("hello", 1, 2, 5, 4, 7, 8, 9));

//----------------------------------------Destructuring  array-------------------------------------

const heros = [
  "tony",
  "steve",
  "peter",
  "bruce",
  "thor",
  "bucky",
  "caption marvel",
];

const [winner, runnerup, secondRunnerup, ...others] = heros;
console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(others);

//----------------------------------------Destructuring  array-------------------------------------

const studentInfo = {
  name: "Vishal",
  age: 26,
  class: "Mtech",
  subject: ["IT", "Computer", "Coding"],
  username: "vishal@1043",
  password: "vish8181",
  city: "Amdawad",
};

// let { username, password } = studentInfo;
// console.log(username, password);

let { username: user, password: secret, city = "Gandhinagar" } = studentInfo;
console.log(user, secret, city); //city is Amdawad, priority city mentioned in studentInfo

//============================================ASSIGNMENT===============================================

//Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

const arr9 = [1, 2, 3, 4, 5];

const square = arr9.map((el) => el * el);
console.log(square);

const squareSum = square.reduce((acc, el) => acc + el, 0);
console.log(squareSum);

const avg = squareSum / square.length;
console.log(avg);
// const squareSum = (array) =>
//   array.map((el) => el * el).reduce((acc, el) => acc + el);
// console.log(squareSum(arr9));

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

const arr10 = [10, 20, 30, 40, 50];

const newArr10 = arr10.map((el) => el + 5);
console.log(newArr10);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

const words = ["priyanka", "mahimn", "vishal", "minaxi", "hasmukhbhai"];

const newWords = words.map((el) => el.toUpperCase());
console.log(newWords);

const newWords1 = words.map((el) => el[0].toUpperCase() + el.slice(1));
console.log(newWords1);

//Qs4. Write a function called double And Return Args which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const double1 = (arr, ...args) => [...arr, ...args.map((el) => el * 2)];

console.log(double1([1, 2, 3, 4], 5, 6));

//Qs5. Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObj = function (obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};

const myInfo = {
  name: "Priyanka",
  age: 30,
  job: "Web developer",
};

const myChildInfo = {
  name1: "Mmahimn Patel",
  age1: 1,
  nature: "Joyfull",
};

const myWorld = mergeObj(myInfo, myChildInfo);
console.log(myWorld);
