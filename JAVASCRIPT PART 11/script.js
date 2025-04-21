/* const hello = function () {
  console.log("indise hello function");
  console.log("hello");
};

const demo = function () {
  console.log("calling hello function");
  hello();
};

console.log("calling demo function");

demo();
console.log("done, bye!");

//-------------------------- Visualizing the call stack --------------------------------------
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

// -------------------------------- Callback hell ---------------------------------------------

const h1 = document.querySelector("h1");
//callback hell
// const changeColor = function (color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// };

//Callback nesting --> Callbackhell
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

// by promise
const changeColor = function (color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color chnaged completely");
    }, delay);
  });
};

changeColor("red", 1000)
  .then(() => {
    console.log("red color change complete");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color change complete");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color change complete");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color change complete");
    return changeColor("blue", 1000);
  })
  .catch(() => {
    console.log("color has not changed");
  });

///// Callback hell anotherexample

const savetoDB = function (data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
};

savetoDB(
  "Apna college",
  () => {
    console.log("success : successfully save the data");
    savetoDB(
      "Mahimn",
      () => {
        console.log("success2 : Mahimn will become the Great Person.");
        savetoDB(
          "Priyanka",
          () =>
            console.log(
              "success3 : Priyanka will become the most successful girl"
            ),
          () => console.log("failure3 : Weak connection")
        );
      },
      () => console.log("failure2 : Weak connection")
    );
  },
  () => {
    console.log("Failure : Weak connection! Data has not saved!");
  }
);

//--------------------------------------- Promise --------------------------------------------

const savetoDB = function (data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("resolve : data was saved");
    } else {
      reject("reject : Weak connection");
    }
  });
};

// let request = savetoDB("Apna college");
// // console.log(request); // promise

// request
//   .then(() => {
//     console.log("Promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//     console.log(request);
//   });

//compact version of above
// savetoDB("Apna college")
//   .then(() => {
//     console.log("Promise was resolved");
//     savetoDB("Mahimn").then(() =>
//       console.log("Mahimn will become the great Person.")
//     );
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

///Improved version
savetoDB("Apna college")
  .then((result) => {
    console.log("success : successfully save the data");
    console.log("result of promises:", result);
    return savetoDB("Mahimn");
  })
  .then((result) => {
    console.log("Mahimn will become the great Person.");
    console.log("result of promises:", result);
    return savetoDB("Priyanka");
  })
  .then((result) => {
    console.log("Priyanka will become most successful girl");
    console.log("result of promises:", result);
  })
  .catch((error) => {
    console.log("Failure : Weak connection! Data has not saved!");
    console.log("error of promises:", error);
  });
*/
//------------------------------------- Async function -----------------------------------------

const greet = async function () {
  // throw "404 page not found";
  return "hello!";
};

greet()
  .then((result) => {
    console.log("Promise was resolved!");
    console.log("result is", result);
  })
  .catch((err) => {
    console.log("Promise was rejected with err", err);
  });

const demo = async () => {
  return 5;
};

//----------------------------------- Await Keyword -------------------------------------------

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      console.log(randomNum);
      resolve();
    }, 1000);
  });
}

async function demo1() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

// another rexample
const h1 = document.querySelector("h1");
const changeColor = function (color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      console.log("color changed", color);
      resolve("color chnaged completely");
    }, delay);
  });
};

const demo2 = async function () {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught");
    console.error(err);
  }
  let a = 5;
  console.log(a + 3);
};

const data = {
  name: "priyanka",
  age: 30,
  job: "software engineer",
  child: "Mahimn",
};

console.log(typeof data);

////======================= First API request =========================
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log("data1: ", data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log("data2: ", data.fact);
  });

//========================using fetch with async and await ========================

// async function getFacts() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log("data1: ", data.fact);

//     const res2 = await fetch(url);
//     const data2 = await res2.json();
//     console.log("data2: ", data2.fact);
//   } catch (err) {
//     console.error(err);
//   }
// }

const btn = document.querySelector("button");
const p = document.querySelector("#result");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  p.innerText = fact;
});

async function getFacts() {
  try {
    const res = await axios.get(url);
    // console.log(res);
    // console.log(res.data);
    return res.data.fact;
  } catch (err) {
    console.error(err);
    return "No fact found";
  }
}

const url2 = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector("#dogBtn");
const img = document.querySelector("#result2");

dogButton.addEventListener("click", async () => {
  let link = await getImage();
  img.setAttribute("src", link);
  console.log(link);
});

async function getImage() {
  try {
    const res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.error(err);
    return "No image found";
  }
}

// Sending Headers with API requests;

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get(url3, config);
  console.log(res.data);
}

// ============================ Activity using query string ===========================
/*
const url4 = "http://universities.hipolabs.com/search?name=";
const inp = document.querySelector("input");
const clickBtn = document.querySelector("#countryClick");
const list = document.querySelector("#result3");

async function getCollegesList(country) {
  try {
    const res = await axios.get(url4 + country);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

clickBtn.addEventListener("click", async () => {
  let country = inp.value;
  let colleges = await getCollegesList(country);
  console.log(colleges);
  inp.value = "";
  list.innerText = "";

  for (college of colleges) {
    let item = document.createElement("li");
    item.innerText = college.name;
    list.appendChild(item);
  }
});
*/
// for state search

const inp1 = document.querySelector("#state");
const clickBtn1 = document.querySelector("#stateClick");
const list1 = document.querySelector("#result4");
async function getCollegesList(state) {
  try {
    const url5 = `http://universities.hipolabs.com/search?country=india&name=${state}`;
    const res = await axios.get(url5);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

clickBtn1.addEventListener("click", async () => {
  let state = inp1.value;
  let colleges = await getCollegesList(state);
  console.log(colleges);
  inp1.value = "";
  list1.innerText = "";

  for (college of colleges) {
    let item = document.createElement("li");
    item.innerText = college.name;
    list1.appendChild(item);
  }
});
