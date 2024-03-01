import { showCurrentImage } from "../components/charachterWheel.mjs"

export const startPage = () => {
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
        window.location.href = "#/startingPoint/index.html"
    })

    let rouletteDiv = document.createElement("div")

    let backButton = document.createElement("p")
    backButton.classList.add("fa-solid", "fa-caret-left", "backButton")
    backButton.id = "prevButton"

    let nextButton = document.createElement("p")
    nextButton.classList.add("fa-solid", "fa-caret-right", "nextButton")
    nextButton.id = "nextButton"

    let carouselContainer = document.createElement("div")
    carouselContainer.classList.add("carouselContainer")
    carouselContainer.id = "carouselContainer"


    let h2 = document.createElement("h2")
    h2.innerText = "Character"


    main.appendChild(box)
    box.append(playDiv, characterDiv)
    playDiv.appendChild(playButton)
    characterDiv.append(rouletteDiv, h2)
    rouletteDiv.append(backButton, carouselContainer, nextButton)

}
