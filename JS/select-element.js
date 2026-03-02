// case a. get single element
console.log(document.getElementById("app-title"));

// case b. get element attributes by dot notation
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);

// case c. get element attributes by getAttribute method
console.log(document.getElementById("app-title").getAttribute("id"));
console.log(document.getElementById("app-title").getAttribute("class"));

// case d. update attributes by dot notation
document.getElementById("app-title").id = "new-title";
document.getElementById("new-title").className = "text-red";

// case e. update attributes by setAttribute method (attribute,value)
document.getElementById("new-title").setAttribute("id", "app-title");
document.getElementById("app-title").setAttribute("class", "text-green");

// case f. save the element to a variable for various operations
const title = document.getElementById("app-title");
console.log(title.textContent);

// html text - faster and direct access
title.textContent = "Hello World";

// inner text - slower and involve css style calculation
title.innerText = "Hello again";

// innerHTML - can insert html tags in string format
title.innerHTML = "<strong>Shopping List</strong>";

console.log(title.textContent);

// case g. update inline css style / attributes by dot notation change css properties in camelCase
title.style.color = "blue";
title.style.fontSize = "40px";
title.style.backgroundColor = "yellow";

// case h. querySelector , return first result - single element
console.log(document.querySelector("h1")); // select by tag name
console.log(document.querySelector("#app-title")); // select by id
console.log(document.querySelector(".container")); // select by class name
console.log(document.querySelector("input[type='text']")); // select by attribute
console.log(document.querySelector("li:nth-child(2)")); // select by psudo class

const seconditem = document.querySelector("li:nth-child(2)");
seconditem.innerText = "Motorola";
// seconditem.textContent = "Motorola";
seconditem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);

const firstitem = list.querySelector("li");
firstitem.style.color = "green";