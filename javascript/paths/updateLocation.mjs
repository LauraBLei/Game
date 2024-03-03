import { pathOne } from "./pathOne.mjs";


export const updateLocationPathOne = (nameOfLocation) => {
  let character = JSON.parse(localStorage.getItem('character'))

  let story = document.getElementById('storyText')
  story.innerText = '' 
  story.innerText = pathOne[nameOfLocation].story.replaceAll('{name}', character.name)

  let backgroundImage = document.getElementById('pageContainer')
  backgroundImage.style.backgroundImage = `url("${pathOne[nameOfLocation].image.src}")`

  let button1 = document.getElementById("pathOne");
  button1.innerText = pathOne[nameOfLocation].nextPathsText[0];

  let button2 = document.getElementById("pathTwo");
  button2.innerText = pathOne[nameOfLocation].nextPathsText[1];

  let button3 = document.getElementById("pathThree");
  button3.innerText = pathOne[nameOfLocation].nextPathsText[2];
};

