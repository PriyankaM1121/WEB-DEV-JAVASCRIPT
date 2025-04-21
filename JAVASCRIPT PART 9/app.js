//------------------------------getElementById-----------------------------------
const imgObj = document.getElementById("mainImg");
console.dir(imgObj);
console.dir(imgObj.src);
//------------------------------getElementByClassName-----------------------------------

const oldImgs = document.getElementsByClassName("oldImg");
console.dir(oldImgs);

for (let i = 0; i < oldImgs.length; i++) {
  console.dir(oldImgs[i].src);
}

const tags = document.getElementsByTagName("p");
console.dir(tags);

//tags[0].innerText = "abc";

//---------------------------------------querySelector---------------------------------------
console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg")); //select only 1st element which have this .oldImg class
console.dir(document.querySelectorAll(".oldImg")); //querySelectorAll select all elements with same className

console.dir(document.querySelectorAll("p"));

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));

//-------------------------------------Setting content in Object--------------------------------

const para = document.querySelector("p");
console.dir(para);
console.dir(para.innerText);
console.dir(para.innerHTML);
console.log(para.textContent);

// para.innerText = `Hi, i am <b>Peter Parker<b>`;
// para.textContent = `Hi, i am <b>Peter Parker<b>`;
// para.innerHTML = `Hi, i am <b>Peter Parker<b>`;

const heading = document.querySelector("h1");
// heading.innerHTML = `<u>${heading.innerText}<u>`;

//------------------------------------Manipulating Attributes------------------------------------

const imgSpiderman = document.querySelector("img");

console.log(imgSpiderman.getAttribute("id"));
// imgSpiderman.setAttribute("id", "spidermanImg");
// console.log(imgSpiderman.getAttribute("id"));
// imgSpiderman.setAttribute(
//   "src",
//   "assets-20250213T035455Z-001/assets/creation_3.jpeg"
// );
// console.log(imgSpiderman.getAttribute("src"));

//------------------------------------- Manipulating style---------------------------------------

// heading.style.backgroundColor = "lightBlue";
// heading.style.color = "red";

// const links = document.querySelectorAll(".box a");

// for (link of links) {
//   link.style.color = "purple";
// }

//------------------------------------- classList Property ---------------------------------------

heading.classList.add("green");
heading.classList.add("underline");
heading.classList.remove("underline");
heading.classList.contains("underline");
heading.classList.toggle("green");

//------------------------------------- Navigation on page ---------------------------------------

const h4 = document.querySelector("h4");
console.log(h4.parentElement);

const box = document.querySelector(".box");
console.log(box.childElementCount);
console.log(box.children);
console.log(box.childNodes);

const ul = document.querySelector("ul");
console.log(ul.previousElementSibling);

console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[1].nextElementSibling);

//-----------------------------------------Adding elements on page-------------------------------

let newPara = document.createElement("p");

newPara.innerText = "Hi, i am new paragraph.";

console.dir(newPara);

//---- appendChild() method

// The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.

let body = document.querySelector("body");

body.appendChild(newPara); // add at last of the body

box.appendChild(newPara);

let btn = document.createElement("button");
btn.innerText = "click me!";

box.appendChild(btn);

//--- append() method

// The Element.append() method inserts a set of Node objects or strings after the last child of the Element.        Strings are inserted as equivalent Text nodes.

// Differences from Node.appendChild():

// * Element.append() allows you to also append strings, whereas Node.appendChild() only accepts Node objects.
// * Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// * Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

newPara.append(btn);
newPara.append(" click this button");

//-----Prepend() method

box.prepend(newPara); // attach at starting

//------insertAdjacentElement()

// * 'beforebegin': Before the targetElement itself.
// * 'afterbegin': Just inside the targetElement, before its first child.
// * 'beforeend': Just inside the targetElement, after its last child.
// * 'afterend': After the targetElement itself.

const newBtn = document.createElement("button");
newBtn.innerText = "NEW Button!!";

let p = document.querySelector("p");

p.insertAdjacentElement("beforebegin", newBtn); // outside of <p> element means its start before <p> element
p.insertAdjacentElement("afterbegin", newBtn); // insise in <p> element at start
p.insertAdjacentElement("beforeend", newBtn); //inside in <p> element at end
p.insertAdjacentElement("afterend", newBtn); //outside of <p> element means its after <p> element

//-------------------------------- Practice question ----------------------------------------

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
para1.style.color = "red";
body.append(para1);

let h3 = document.createElement("h3");
h3.innerText = " I'm a blue h3!";
h3.style.color = "blue";
body.append(h3);

let div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
body.appendChild(div);
div.appendChild(h1);

let p2 = document.createElement("p");
p2.innerText = "ME Too!";
div.appendChild(p2);

//============================================== Assignment Question ======================================
// Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

const input2 = document.createElement("input");
const btn2 = document.createElement("button");
btn2.innerText = "click me";
body.append(input2);
input2.style.marginRight = "2rem";
input2.style.marginTop = "2rem";
body.append(btn2);

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

input2.setAttribute("placeholder", "username");
btn2.setAttribute("id", "btn");
console.log(btn2.getAttribute("id"));

//Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white
const buttonA = document.querySelector("#btn");
// buttonA.style.backgroundColor = "blue";
// buttonA.style.color = "white";

buttonA.classList.add("btn");

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

const heading1 = document.createElement("h1");
body.append(heading1);
heading1.innerText = "DOM Practice";
heading1.classList.add("heading1");

//Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

const p1 = document.createElement("p");
p1.innerHTML = "Apna Ccollege <b>Delta </b> Practice";
body.append(p1);
