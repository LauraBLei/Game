import { startingPath } from "../paths/paths.mjs";

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
    
    let pathOne = document.createElement('a')
    pathOne.innerText = startingPath['nextPathsText'][0]
    pathOne.classList.add('pathButton')
    pathOne.addEventListener('click', () => window.location.href = "#/path1/index.html")

    let pathTwo = document.createElement('a')
    pathTwo.innerText = startingPath['nextPathsText'][1]
    pathTwo.classList.add('pathButton')
    pathTwo.addEventListener('click', () => window.location.href = "#/path2/index.html")

    let pathThree = document.createElement('a')
    pathThree.innerText = startingPath['nextPathsText'][2]
    pathThree.classList.add('pathButton')
    pathThree.addEventListener('click', () => window.location.href = "#/path3/index.html")


    let storyTextBox = document.createElement('div')
        storyTextBox.id = 'storyTextBox'

    let storyText = document.createElement('p')
        storyText.innerText = startingPath.story.replace('{name}', character.name)
        storyText.classList.add('storyText')


    storyContainer.append(storyTextBox, pathDiv)
    pathDiv.append(pathOne, pathTwo, pathThree)
    storyTextBox.appendChild(storyText)
}

const makeInventoryContainerContent = (inventoryContainer, character) => {

    inventoryContainer.append()
}