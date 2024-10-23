console.clear();
console.log("02 is working!");

// let's select the OL

const olElement = document.querySelector("#my-list");

// how do I create an element???

const newListItemElement = document.createElement("li");
// now I have an <li></li> floating in the limbo

newListItemElement.innerText = "This is the li created with JS";
// now we have this <li>This is the li created with JS</li> floating in the limbo

olElement.appendChild(newListItemElement);
// now we will see it inside the ol element.

// to identify a parent element

const firstLinkElement = document.querySelector("#first-link");

console.log(firstLinkElement.parentElement);

const parentOfLi = firstLinkElement.parentElement;

const newH1 = document.createElement("h1");

newH1.innerText = "This is the new h1";

// it adds it at the beginning
parentOfLi.prepend(newH1);
