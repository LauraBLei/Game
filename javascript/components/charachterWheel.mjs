import { characters } from "./characters.mjs";

const prevButton = document.getElementById("prevButton")
const nextButton = document.getElementById("nextButton")
let currentIndex = 0;

export const showCurrentImage = () => { 
    let carouselContainer = document.getElementById('carouselContainer')

    let imageBox = document.createElement("div")
    imageBox.classList.add("imageCarouselBox")

    let imageElement = document.createElement("img")
    imageElement.classList.add("characterCarouselImage")
    imageElement.src = characters[currentIndex].image.src
    imageElement.alt = characters[currentIndex].image.alt

    try {carouselContainer.innerHTML = ""}
    catch(error){}
    carouselContainer.appendChild(imageBox);
    imageBox.appendChild(imageElement)
}