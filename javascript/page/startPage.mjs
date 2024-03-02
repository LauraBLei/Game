import { showCurrentImage, showNextImage, showPreviousImage } from "../components/charachterWheel.mjs"

export const startPage = () => {
    let main = document.querySelector('main')
    main.innerHTML = '';
    makePage()
    showCurrentImage()
}

const makePage = () => {
    let main = document.querySelector("main")
    
    let box = document.createElement("div")
    box.classList.add("startPageBox")

    let playDiv = document.createElement("div")

    let characterDiv = document.createElement("div")

    let playButton = document.createElement("a")
    playButton.innerText = "Play"
    playButton.classList.add("playButton")
    playButton.addEventListener('click', () => {
        if(localStorage.getItem('character') === null){
            alert("You must select a character to continue your journey!")
        }else{
            window.location.href = "#/startingPoint/index.html"
        }
    })

    let carouselDiv = document.createElement("div")
    carouselDiv.classList.add("carouselDiv")

    let backButton = document.createElement("p")
    backButton.classList.add("fa-solid", "fa-caret-left", "backButton")
    backButton.id = "prevButton"
    backButton.addEventListener('click', () => showPreviousImage())

    let nextButton = document.createElement("p")
    nextButton.classList.add("fa-solid", "fa-caret-right", "nextButton")
    nextButton.id = "nextButton"
    nextButton.addEventListener('click', () => showNextImage())

    let carouselContainer = document.createElement("div")
    carouselContainer.classList.add("carouselContainer")
    carouselContainer.id = "carouselContainer"


    let h2 = document.createElement("h2")
    h2.innerText = "Character"


    main.appendChild(box)
    box.append(playDiv, characterDiv)
    playDiv.appendChild(playButton)
    characterDiv.append(h2, carouselDiv)
    carouselDiv.append(backButton, carouselContainer, nextButton)

}
