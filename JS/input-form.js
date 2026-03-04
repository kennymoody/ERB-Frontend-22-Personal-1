const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  const isChecked = document.getElementById("checkbox").checked;
  const heading = document.getElementById("app-title");
  if (item.length < 3 || priority === "0") {
    console.log("Item must be at least 3 characters");
    heading.textContent = "Item must be at least 3 characters";
  } else {
    form.submit();
  }
  console.log(item, priority, isChecked);
}

// form.addEventListener("submit", onSubmit);

function onSubmit2(e) {
  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");
  const entries = formData.entries();
  e.preventDefault();
  console.log(entries);
  for (let entry of entries) {
    console.log("for = ", entry[0], entry[1]);
  }
  console.log(item, priority);
}

form.addEventListener("submit", onSubmit2);
