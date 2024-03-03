import {pathOne } from "../paths/pathOne.mjs";
import { startingPath } from "../paths/startingPath.mjs";
import { updateLocationPathOne } from "../paths/updateLocation.mjs";
export const startingPoint = () => {
    let main = document.querySelector("main")
    main.innerHTML = '';

    let character = JSON.parse(localStorage.getItem('character'))
    makePage(character)
}

const makePage = (character) =>{
    let main = document.querySelector("main")

    let pageContainer = document.createElement('div')
        pageContainer.classList.add('pageContainer')
        pageContainer.id = "pageContainer"
        pageContainer.style.backgroundImage = `url("${startingPath.image.src}")`

    let storyContainer = document.createElement('div')
        storyContainer.classList.add('storyContainer')
        storyContainer.id = "storyContainer"
    
    let inventoryContainer = document.createElement('div')
        inventoryContainer.classList.add('inventoryContainer')

    main.appendChild(pageContainer)
    pageContainer.append(storyContainer, inventoryContainer)

    makeStoryContainerContent(storyContainer, character)

    makeInventoryContainerContent(inventoryContainer, character)
}

const makeStoryContainerContent = (storyContainer, character) => {
    let pathDiv = document.createElement('div')
    pathDiv.classList.add('pathDiv')
    
    let button1 = document.createElement('a')
    button1.innerText = startingPath['nextPathsText'][0]
    button1.classList.add('pathButton')
    button1.id = "pathOne"
    button1.addEventListener('click', (event) => updateLocationPathOne(event.target.innerText))

    let button2 = document.createElement('a')
    button2.innerText = startingPath['nextPathsText'][1]
    button2.classList.add('pathButton')
    button2.id = "pathTwo"
    button2.addEventListener('click', (event) => alert("This path is not yet ready for you"))

    let button3 = document.createElement('a')
    button3.innerText = startingPath['nextPathsText'][2]
    button3.classList.add('pathButton')
    button3.id = "pathThree"
    button3.addEventListener('click', (event) =>  alert("This path is not yet ready for you"))


    let storyTextBox = document.createElement('div')
        storyTextBox.id = 'storyTextBox'

    let storyText = document.createElement('p')
        storyText.innerText = startingPath.story.replace('{name}', character.name)
        storyText.classList.add('storyText')
        storyText.id = "storyText"
    
    let nameOfLocation = document.createElement('h3')
    nameOfLocation.innerText = startingPath.location

    storyContainer.append(nameOfLocation, storyTextBox, pathDiv)
    pathDiv.append(button1, button2, button3)
    storyTextBox.appendChild(storyText)
}

// const makeInventoryContainerContent = (inventoryContainer, character) => {

//     inventoryContainer.append()
// }