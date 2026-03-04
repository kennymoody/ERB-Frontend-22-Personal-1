const iteminput = document.getElementById("item-input");
const onKeyPress = (e) => console.log("keypress");

iteminput.addEventListener("keypress", onKeyPress);

const onKeyUp = (e) => console.log("keyup");
const onKeyDown = (e) => {
  if (e.key === " " || e.key === "Space")
    console.log("Space is pressed - keydown");
  if (e.keycode === 13) console.log("Enter is pressed - keydown");
  if (e.code === "Digit1") console.log("1 is pressed - keydown");
  if (e.repeat) {
    console.log(e.key + " is being held down");
  }
  console.log("shift : " + e.shiftKey);
  console.log("ctrl : " + e.ctrlKey);
  console.log("alt : " + e.altKey);
  if (e.shiftKey && e.key === "A") {
    console.log("Shift + a is pressed - keydown");
  }
};

iteminput.addEventListener("keyup", onKeyUp);
iteminput.addEventListener("keydown", onKeyDown);
