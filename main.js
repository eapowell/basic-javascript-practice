//import { senators } from "./senators.json">

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
// return the async data
let allSenators = []
let simpleSenators = []

const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
    populateDOM(allSenators)
    get oldestSenator(simpleSenators)
    simpleSenators = mapSenators(allSenators)
    populateDOM(simpleSenators)
})


// whos republican? whos democrat?

const republicans = allSenators.filter(senator => senator.party === 'R')
const democrats = allSenators.filter(senator => senator.party === 'D')
const independent = allSenators.filter(senator => senator.party === 'ID')

console.log(republicans, democrats)
console.log(simpleSenators)

// map example

function mapSenators(allSOfThem) {
   const resultMap =allOfThem.map(senator => {
    return {
        id: senator.id,
        name: '${senator.first_name} ${senator.last_name}',
        party: senator.party,
        birth_date: senator.date_of_birth, 
        age: _calculateAge(new Date(senator.date_of.birth)),
        gender: senator.gender
    }
})
return resultMap
}






//reduce example

const testArray = [5,10,15,20,25,30,35,40,45,50]

const testReduce = testArray.reduce((acc, num) => {
   return acc + num
}, 0)

function getOldestSenator(arrayOfSenators) {
    return arrayOfSentators.reduce((acc, senator) => {
        return (oldest.age || 0) > senator.age ? oldest : senator
}, {})
}






const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    senatorArray.forEach(senator => {

    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    let cardImage = document.createElement('div')
    card.setAttribute('class', 'card-image')
    let cardFIgure = document.createElement('figure')
    cardFIgure.setAttribute('class', 'image is-4by3')
    let figureImage = document.createElement('img')
    figureImage.src = "https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg"
    figureImage.alt = "Placeholder_image"

    cardFIgure.appendChild(figureImage)
    cardImage.appendChild(cardFigure)
    card.appendChild(cardImage)
    card.appendChild(populateCardContent(senator))
    container.appendChild(card)

    })

}

function populateCardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', "card-content")
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('div')
    figure.setAttribute('class', 'figure')
    let figureImage = document.createElement('div')
    if(senator.party === "R") {
        figureImage.src = "/images/elephant.png"
    }
    if(senator.party === "D") {
        figureImage.src = "/images/donkey.png"
    } 

    figureImage.setAttribute('class', 'image is-48x48')
    let figureImage = document.createElement('div')
    figureImage.src = "/img/elephant.png"
    figureImage.alt = "Placeholder thumbnail"
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-4')
    let titleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')
    titleP.textContent = '${senator.name}'

    let contentDiv = Document.createElement('div')
    contentDiv.setAttribute('class', 'content')
    contentDiv.textContent = 'Lorem ipsum dolar sit amet'
    let contentBreak = document.createElement('br')
    let timeSection = document.createElement('time')
    let newDate = Date.now()
    timeSection.dateTime = '${newDate}'
    timeSection.textContent = '${newDate}'

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(figureImage)
    mediaLeft.appendChild(figure)
    media.textContent()
    media.textContent()


























}