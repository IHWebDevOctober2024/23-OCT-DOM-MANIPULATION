// Events are the actions the user is going to perform in our app

window.addEventListener("resize", (event) => {
  console.log(event.currentTarget.innerWidth);
});

/* document.addEventListener("click", (event) => {
  // here I'm targeting ALL the clicks on my document
  console.log(event.target);
}); */

const button1Element = document.querySelector("#button1");
let clicks = 0;

// lets display the menu when we click on the button
const menuElement = document.querySelector("#menu");

button1Element.addEventListener("click", () => {
  console.log(menuElement);

  clicks++;
  console.log(`We have clicked ${clicks} times in the button`);
  // is this the best practice? adding inline styling???
  //   menuElement.style.display = "block";
  // maybe not here...

  // what we can do on this example is to toggle between two classes

  menuElement.classList.toggle("visible");
  menuElement.classList.toggle("not-visible");
});
