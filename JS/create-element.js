// <div class="my-element" id="my-element" title="My element">Hello World</div>
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");

// a. create a text inside the div
div.innerText = "Hello World";

// b. create a text node
const text = document.createTextNode("Hello World");
div.appendChild(text);
// document.querySelector("ul").appendChild(div);

// ============================
// use a function to build an element group

function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item} <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i></button>`;
  document.querySelector(".items").appendChild(li);
}

createListItem("Motorola");
createListItem("Oneplus");

function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}

createNewItem("Redmi");
createNewItem("iQOO");