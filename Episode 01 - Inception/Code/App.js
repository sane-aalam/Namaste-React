// let root = document.getElementById("root");

// // Creating new Element using pure javascript
// let newElementHeading = document.createElement("h1");
// newElementHeading.innerText = "Hello' world!";

// let newElementHeading2 = document.createElement("h1")
// newElementHeading2.innerText = "I am heading 2 tag"

// root.appendChild(newElementHeading)
// root.appendChild(newElementHeading2)

/*
const element = React.createElement("h1",{},"hello'world!");
console.log(element)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

*/

/* Assignment-1
<div id="parent">
    <div id="child">
        <h1>I am h1 Tag</h1>
        <h1>I am h2 Tag</h1>
    </div>
</div> */

/*
let container = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h1", {}, "I am h1 Tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

*/

/* Assignment-2
<div id="parent">
    <div id="child-1">
        <h1>I am h1 Tag</h1>
        <h1>I am h2 Tag</h1>
    </div>
    <div id="child-2">
        <h1>I am h1 Tag</h1>
        <h1>I am h2 Tag</h1>
    </div>
</div>
 */

let container = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h1", {}, "I am h1 Tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h1", {}, "I am h1 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

/** TIP-1 (MOST)
 * React.createElement --------> not create HTML TAG
 * Create actually javascript Object
 * ReactDOM is responsible to converting Object -----> HTML Tag
 */

/* TIP-2 

using ReactDOM, it will become complex, you can't not do it for productation ready projects.
It will be hard to understand.
It will be hard to write.
It will be complex code.
It will be not maintainable code

That's why JSX comes into picture
Javascript XML - make developer life easy.
Don't worry, i will go slow and deep way to understand everything!
*/

/** TIP-3
 * 1- create new element using React.CreateElement
 * 2- pick the root node using ReactDOM
 * 3- Whenever this new element render into the root
 * 4- by default value present into the div(root) removed
 * 5- load as new(fresh) start
 * 6- This is beatiful react js!
 *     createElement("TAGNAME","ATTIBUTE","SUMMARY",[NEXT CHILDRENS])
 * 7- you can use Array for next childrens
 * */
