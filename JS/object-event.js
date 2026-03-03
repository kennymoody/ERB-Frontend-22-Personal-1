// a. add event listener with callback function
const logo = document.querySelector("header");
logo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.currentTarget);
});

// b. rewrite to callback function
function onClick(e) {
  console.log(e);
  console.log(e.target); // the element that triggered the event
  console.log(e.currentTarget); // the element that the event listener is attached to
  console.log(e.clientX, e.clientY); // coordinates relative to the viewport
  console.log(e.offsetX, e.offsetY); // coordinates relative to the element
  e.target.style.backgroundColor = "red";
  e.currentTarget.style.backgroundColor = "blue";
}
logo.addEventListener("click", onClick);


document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Link Clicked");
})