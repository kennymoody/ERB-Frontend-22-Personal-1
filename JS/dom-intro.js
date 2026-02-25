console.log(window);
console.dir(window.document);
console.log(document.body);
console.log(document.links[0]);
// This line of code replaces the entire HTML content of the <body> element with a new string containing just an <h1> element with the text "innerHTML replacement". This is done by setting the innerHTML property of the <body> element to the desired string.
// document.body.innerHTML = '<h1>innerHTML replacement</h1>';

// The innerText property of the <body> element returns the text content of the element, excluding any HTML tags.
// This is useful for getting the plain text content of the page, without any of the HTML markup.
// console.log("The document body's inner text is: " + document.body.innerText);

// document.write("Hello from JS");

// document.getElementById("main").innerHTML = '<h1>HTML Replacement by getElementById</h1>';
document.querySelector("#main h1").innerText = 'HTML Replacement by querySelector';