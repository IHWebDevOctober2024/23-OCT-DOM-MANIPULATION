console.log("The index.js is working");

console.log(document);

// select an element by using the selector
console.log(document.querySelector("#main-title"));

// same as querySelector but no need to add the #
console.log(document.getElementById("main-title"));

// it selects the first coincidence
console.log(document.querySelector(".list-item"));

console.log(document.querySelector("li").innerText);

document.querySelector("li").innerHTML = "<p>This is inside a paragraph</p>";
document.querySelector("li").innerText = "<p>New text on li</p>"; // the tag will be displayed and it's not HTML

// this is going to be a NodeList. Is not exactly an array. We call it ARRAY LIKE
console.log(document.querySelectorAll(".list-item"));

const liElements = document.querySelectorAll(".list-item");

liElements.forEach((liElement) => {
  liElement.innerText = "New text";
});

// this gives me an HTML collection. I don't even have the forEach loop here.
let elements = document.getElementsByClassName("list-item");

console.log(elements);

const squareElement = document.querySelector("#square");
// This changes all the classes. ⚠️ this deletes the previous classes!
// squareElement.className = "red border solid main-element";

console.log(squareElement.classList);
// add classes one by one
squareElement.classList.add("pointer");
// remove classes one by one
squareElement.classList.remove("radius-xl");

