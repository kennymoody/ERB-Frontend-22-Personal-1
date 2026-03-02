// select multiple elements using selectElement(s)byClassName, selectElement(s)byTagName
// return HTMLCollection

const listItems = document.getElementsByClassName("item");
console.log(listItems);
console.log(listItems[2]);

const listItems1 = document.getElementsByTagName("li");
console.log(listItems1);
console.log(listItems1[3]);
