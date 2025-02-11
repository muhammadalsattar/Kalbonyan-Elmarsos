// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()


// Exploring Another API video challenge

const countryCode = 'EG'
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener("readystatechange", e => {
    if(e.target.readyState === 4 && e.target.status === 200)
    {
        const response = JSON.parse(e.target.responseText);
        const countryObject = response.find(country => country.alpha2Code === countryCode);
        countryObject? console.log(countryObject.name) : console.log('Error occured');
    }
})
countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=86ce9df3657ad15a5ff06956470b2784');
countryRequest.send();
