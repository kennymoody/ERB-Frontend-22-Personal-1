function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  //   const button = document.createElement("button");
  //   button.className = "remove-item btn-link text-red";
  //   const button = createButton("remove-item btn-link text-red");
  const button = createItem("remove-item btn-link text-red", "button");
  //   const icon = document.createElement("i");
  //   const icon = createIcon("fa-solid fa-xmark");
  const icon = createItem("fa-solid fa-xmark", "i");
  //   icon.className = "fa-solid fa-xmark";
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function createItem(classes, element) {
  const item = document.createElement(element);
  item.className = classes;
  return item;
}

createNewItem("Redmi");
// createNewItem("iQOO");
