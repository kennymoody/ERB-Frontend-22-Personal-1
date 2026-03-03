function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";
  // The reason why only one <h1> element is shown is because the `insertAdjacentElement` method inserts the element at the specified position in the DOM tree. If we call `filter.insertAdjacentElement("beforebegin",h1)` and then call `filter.insertAdjacentElement("afterend",h1)`, the second call will overwrite the first one and only one <h1> element will be inserted. To insert two <h1> elements, we need to create two separate elements and call `insertAdjacentElement` twice with different positions. For example:

  const h1Before = document.createElement("h1");
  h1Before.textContent = "insertAdjacentElement beforebegin";

  const h1AfterBegin = document.createElement("h1");
  h1AfterBegin.textContent = "insertAdjacentElement afterbegin";

  const h1After = document.createElement("h1");
  h1After.textContent = "insertAdjacentElement afterend";

  const h1beforeEnd = document.createElement("h1");
  h1beforeEnd.textContent = "insertAdjacentElement beforeend";

  filter.insertAdjacentElement("beforebegin", h1Before);
  filter.insertAdjacentElement("afterend", h1After);
  filter.insertAdjacentElement("afterbegin", h1AfterBegin);
  filter.insertAdjacentElement("beforeend", h1beforeEnd);
}

function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "before-begin");
  item.insertAdjacentText("afterbegin", "after-begin");
}

function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insert-before";
  const thirditem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirditem);
}

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

function insertAfterItem() {
  const li = document.createElement("li");
  li.textContent = "insert-after";
  const firstItem = document.querySelector("li:first-child");
  insertAfter(li, firstItem);
}

// insertElement();
// insertText();
// insertBeforeItem();
insertAfterItem();
