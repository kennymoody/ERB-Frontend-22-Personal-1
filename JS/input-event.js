const itemInput = document.getElementById("item-input");
const priorityInptut = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  heading.textContent = e.target.value;
}

itemInput.addEventListener("input", onInput);

function onChecked(e) {
  const isChecked = e.target.checked
    ? (heading.textContent = itemInput.value + " is checked")
    : (heading.textContent = itemInput.value + "NOT checked");
}

checkbox.addEventListener("change", onChecked);

function onFocus() {
  console.log("focus");
  itemInput.style.backgroundColor = "yellow";
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor = "red";
  itemInput.style.outlineWidth = "5px";
}

function onBlur() {
  console.log("blur");
  itemInput.style.backgroundColor = "white";
  itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priorityInptut.addEventListener("change", onInput);
