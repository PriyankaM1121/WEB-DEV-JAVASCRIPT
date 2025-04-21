// event propagation example

// const div = document.querySelector("div");
// const ul = document.querySelector("ul");
// const lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });

// //event.stopPropagation(); used for stop the event bubbling
// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

//=================================== Todo APP activity =========================
const inp = document.querySelector("input");
const button = document.querySelector("button");
const li = document.querySelector("ul li");
const ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  inp.value = "";

  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
});

// const deleteBtns = document.querySelectorAll(".delete");
// for (deleteBtn of deleteBtns) {
//   deleteBtn.addEventListener("click", function () {
//     const parentEl = this.parentElement;
//     parentEl.remove();
//   });
// }

//===================================== Event delegation ===========================================

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
