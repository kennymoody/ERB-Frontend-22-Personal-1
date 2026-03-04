const div = document.querySelector("div");
const ul = document.querySelector("ul");

div.addEventListener("click", () => {
  console.log("div");
});

ul.addEventListener("click", () => {
  console.log("ul");
});

// form.addEventListener("click", (e) => {
//   alert("form was clicked");
// });

const listItems = document.querySelectorAll("li");
// loop through all list items and add event listener to each of them
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});

// add a single event listener on parent
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
