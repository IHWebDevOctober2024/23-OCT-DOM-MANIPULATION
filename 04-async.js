console.log("ASYNC JS WORKS!");

// Async code is a part of the code that is going to be executed after some time
// the default is to run it line by line

setTimeout(() => {}, 1000); // here we are delaying the code 1000ms

setInterval(() => {}, 1000); // we are delaying it 1000ms and repeating it

// I'm telling JS that this function is ASYNCHRONOUS
async function fetchData() {
  // fetch is sending a GET request to the URL
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const jsonResponse = await response.json();

  // this is the info we need
  console.log(jsonResponse);

  console.log(jsonResponse.results);

  jsonResponse.results.forEach((character) => {
    const divElement = document.createElement("div");
    // divElement.className = "card"
    divElement.classList.add("card");
    const h3Element = document.createElement("h3");
    h3Element.innerText = character.name;

    // add also the img
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", character.image);
    imgElement.setAttribute("alt", `picture of ${character.name}`);

    divElement.appendChild(imgElement);
    divElement.appendChild(h3Element);
    document.body.appendChild(divElement);
    console.log(divElement);
  });
}

fetchData();

// call a function directly without naming it
(() => {
  console.log("does this work?");
  console.log("Yes it does");
})();
