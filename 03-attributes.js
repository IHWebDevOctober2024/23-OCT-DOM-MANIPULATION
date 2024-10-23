console.clear();
console.log("03 works");

const ranmaImageElement = document.querySelector("#ranma-img");

// I'll get the names of the attributes
console.log(ranmaImageElement.attributes);

// get the attribute is just to know the value of it, not to change it
console.log(ranmaImageElement.getAttribute("src"));

setInterval(() => {
  if (ranmaImageElement.getAttribute("src") === "./ranma0.png") {
    ranmaImageElement.setAttribute("src", "./ranma1.png");
    ranmaImageElement.setAttribute("alt", "ranma girl");
} else {
    ranmaImageElement.setAttribute("src", "./ranma0.png");
    ranmaImageElement.setAttribute("alt", "ranma boy");
  }
}, 1000);


