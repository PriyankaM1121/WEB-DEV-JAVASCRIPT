/*
// const btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("Button was clicked");
// };

function sayHello() {
  console.log("Hello!");
}

function sayName() {
  console.log("Priyanka");
}

const btns = document.querySelectorAll("button");

for (btn of btns) {
  // btn.onmouseenter = function () {
  //   console.log("entered on button");
  // };
  // console.dir(btn);

  // btn.onclick = sayHello;
  // btn.onclick = sayName;
  // only one function executed from above with onclick method

  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
}
  */

//==================================== Activity ==============================================

const btn = document.querySelector("button");
const heading = document.querySelector("h3");
const colorContainer = document.querySelector("div");
const para = document.querySelector("p");
const box = document.querySelector(".box");

const generateColor = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};

btn.addEventListener("click", function () {
  heading.innerText = generateColor();
  colorContainer.style.backgroundColor = generateColor();
});

para.addEventListener("click", function () {
  console.log("para clicked");
});

box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});

//========================================= 'this' in Event listener =============================================

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const btn1 = document.querySelector("#btn1");

const changeColor = function () {
  console.log(this.innerText);
  this.style.backgroundColor = "pink";
};

h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
h4.addEventListener("click", changeColor);
//btn1.addEventListener("click", changeColor);

// btn1.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Button clicked");
// });

//Note:By default there is always  'event' argument available
btn1.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("Button clicked");
});

//=================================== Keyboard events ======================================

const inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  // console.log("key =", event.key);
  console.log("code =", event.code);

  if (event.code == "ArrowUp") {
    console.log("Character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("Character moves backward");
  } else if (event.code == "ArrowLeft") {
    console.log("Character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("Character moves right");
  }
});

//===================================== Form events ======================================

const form = document.querySelector("form");
const btn3 = document.querySelector("#register");
const username = document.querySelector("#user");
const password = document.querySelector("#pass");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // alert("form submitted");
//   console.dir(form);
//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value, pass.value);

//   // console.log(username.value);
//   // console.log(password.value);
// });

//-------------------------------------- change event & input event ------------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value", this.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value", this.value);
});

//============================ Activity ========================================
const inp3 = document.querySelector("#text");
const para2 = document.querySelector("#paragraph");

inp3.addEventListener("input", function () {
  para2.innerText = inp3.value;
});

//================================== Assignement ===================================
// Qs1. Try out the following events in Event Listener on your own
// - mouseout
// - keypress
// - Scroll
// - load

const circle = document.querySelector(".circle");

circle.addEventListener("mouseout", function () {
  console.log("mouse out from circle");
});

const inp4 = document.querySelector("#name");

inp4.addEventListener("keypress", function () {
  console.log("key pressed");
});

//=====================scrolling

const scrollBox = document.querySelector(".scroll-box");
const output = document.querySelector(".output");

scrollBox.addEventListener("scroll", function () {
  output.innerText = "Scroll event fired";

  setTimeout(() => {
    output.innerText = "Waiting on scroll events...";
  }, 1000);
});

window.addEventListener("load", function () {
  console.log("Page fully loaded!");
  document.body.style.backgroundColor = "lightblue";
});

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

const body = document.querySelector("body");
const buttonA = document.createElement("button");

body.appendChild(buttonA);
buttonA.innerText = "Click";
buttonA.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading. [Please note that no other character apart from the allowed characters should be visible in the heading]

heading2 = document.querySelector("#heading2");
inp5 = document.querySelector("#originalname");

inp5.addEventListener("input", function () {
  let userInput = this.value;
  let filteredInput = userInput.replace(/[^a-zA-Z\s]/g, "");
  this.value = filteredInput;
  heading2.innerText = filteredInput;
});
