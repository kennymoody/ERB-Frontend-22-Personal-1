let output;

// a. get child element from parent element
let parent = document.querySelector(".parent");
console.log(parent);
output = parent.children;
console.dir(output);
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].style.color = "red";
parent.firstElementChild.style.color = "green";
parent.lastElementChild.style.color = "orange";
console.log(output);

// b. get parent element from child element
output = document.getElementsByClassName("item");
output = secondChild = document.getElementsByClassName("item")[1];
output = secondChild.parentElement;

console.log(output);

// c. get sibling element from child element
output = secondChild.previousElementSibling;
console.log(output);
output = secondChild.nextElementSibling;
console.log(output);

// nodelist
output = parent.childNodes;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].nodeType;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

// from parent to child node
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = "hello world";
console.log(output);

// traverse the dom from child to parent
const childnode = document.querySelector(".item");
output = childnode;
console.log(output);
output = childnode.parentNode;
console.log(output);
output = childnode.parentElement;
console.log(output);

// traverse the dom from sibling to sibling
output = childnode.nextSibling;
output = childnode.previousSibling;
console.log(output);

// why nodelist? nodelist return a static value, it will not change when the dom change, while html collection will change when the dom changes
