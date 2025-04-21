let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

const btns = ["seagreen", "yellow", "seadarkgreen", "grey"];
const allBtns = document.querySelectorAll(".btn");
const h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

const gameFlash = function (btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 250);
};

const userFlash = function (btn) {
  btn.classList.add("userflash");
  setTimeout(() => btn.classList.remove("userflash"), 250);
};

const levelUp = function () {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomBtn);
};

const checkAns = function (index) {
  if (gameSeq[index] === userSeq[index]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over!! your score : <b>${level}<b> <br> Press any key to start again...`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(
      () => (document.querySelector("body").style.backgroundColor = "white"),
      150
    );
    reset();
  }
};

const btnPress = function () {
  let btn = this;
  userFlash(btn);
  let userPressColor = btn.getAttribute("id");
  userSeq.push(userPressColor);
  // console.log(userPressColor);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
};

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

const reset = function () {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
};
