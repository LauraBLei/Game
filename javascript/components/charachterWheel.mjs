import { characters } from "./characters.mjs";


let currentIndex = 0;

export const showCurrentImage = () => { 
    let carouselContainer = document.getElementById('carouselContainer')

    let imageBox = document.createElement("div")
    imageBox.classList.add("imageCarouselBox")

    let imageElement = document.createElement("img")
    imageElement.classList.add("characterCarouselImage")
    imageElement.src = characters[currentIndex].image.src
    imageElement.alt = characters[currentIndex].image.alt

    let characterInfoBox = document.createElement('div')
    
    let characterName = document.createElement('p')
    characterName.classList.add('characterInfo')
    characterName.innerText = "Name: " + characters[currentIndex].name

    let characterWeapon = document.createElement('p')
    characterWeapon.classList.add('characterInfo')
    characterWeapon.innerText = "Weapon: " + characters[currentIndex].weapon

    let characterClass = document.createElement('p')
    characterClass.classList.add('characterInfo')
    characterClass.innerText = "Class: " + characters[currentIndex].class

    let selectCharacter = document.createElement('button')
    selectCharacter.classList.add('selectCharacterButton')
    selectCharacter.innerText = "Select Character"
    selectCharacter.addEventListener('click', () => {
        localStorage.setItem('character', JSON.stringify(characters[currentIndex]))
    })

    try {carouselContainer.innerHTML = ""}
    catch(error){}
    imageBox.appendChild(imageElement)
    characterInfoBox.append(characterName, characterClass, characterWeapon, selectCharacter)
    carouselContainer.append(imageBox, characterInfoBox);
}

export const showNextImage = () => {
    currentIndex = (currentIndex + 1) % characters.length;
    showCurrentImage();
}

export const showPreviousImage = () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    showCurrentImage();
}