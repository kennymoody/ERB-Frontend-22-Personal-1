const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const item = itemList.querySelectorAll("li");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// classis way to add function to the button
clearBtn.onclick = () => {
  alert("Clear Items");
};
clearBtn.onclick = () => {
  console.log("Clear Items");
};
// clearBtn.onclick = onClear;

// use eventListener to attach a function to button
clearBtn.addEventListener("click", () => {
  console.log("Clear Items 2");
});

clearBtn.addEventListener("click", onClear);
setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);
