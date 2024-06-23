
let root = document.getElementById("root");

// Creating new Element using pure javascript
let newElementHeading = document.createElement("h1");
newElementHeading.innerText = "Hello' world!";

let newElementHeading2 = document.createElement("h1")
newElementHeading2.innerText = "I am heading 2 tag"

root.appendChild(newElementHeading)
root.appendChild(newElementHeading2)
