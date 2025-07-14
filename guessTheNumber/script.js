
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);


const form = document.querySelector('#inputForm')
let userInput = document.querySelector('#input')
let button = document.querySelector('#button')
let game = document.querySelector('#newGame')
let guessSlot = document.querySelector('#guessSlot')
let counter = document.querySelector('#counter')
let resultPara = document.querySelector('.resultpara')
let para = document.querySelector('#message')
// console.log(message);
// message.innerHTML = "<h2>Hello</h2>"


let playGame = true
let p = document.createElement('p')
let life = 1
let prevGuess = []


if (playGame) {

    button.addEventListener('click', function(e){
    // console.log(e);
    e.preventDefault()
    let guess = parseInt(userInput.value)
    
    // console.log(guess);
    validateGuess(guess)
})
    
}

function validateGuess(guess){
    
        if (isNaN(guess)) {
            // alert('Valid Number')
            printMessage("Please Enter A Valid Number!!")
        }else if (guess < 1) {
            printMessage("Please Enter A Number More Than One(1)!!")
        }else if (guess > 100) {
            printMessage("Please Enter A Number Less Than 100!!")
        }else {
            prevGuess.push(guess)
            if (life > 10) {
                cleanGuess(guess)
                printMessage(`Game Over!! Random Number Was ${randomNumber}`)
                endGame()
                
            }else{
                cleanGuess(guess)
                checkGuess(guess)
            }
            
        }
        
    }


function checkGuess(guess){
    if (guess > randomNumber) {
        printMessage('Number Is TOO High!!')
    }else if (guess < randomNumber) {
        printMessage('Number Is TOO Low!!')
        
    }else if(guess === randomNumber) {
        printMessage('!!You Won The Game!!')
        endGame()
    }
}

function printMessage(message){
    para.innerHTML = `<span>${message}</span>`
}

function endGame(){
    userInput.setAttribute('disabled', '')
    userInput.value = ''
    playGame = false
    button.setAttribute('hidden', '')
    game.removeAttribute('hidden')
    startGame()
}

function startGame(){
    button.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        life = 1
        userInput.removeAttribute('disabled')
        counter.innerHTML = `${11 - life}`;
        button.removeAttribute('hidden')
        game.setAttribute('hidden', '')
        guessSlot.innerHTML = '<span></span>'
        printMessage('')
        playGame = true
    })
}

function cleanGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML = `[${prevGuess}]     `;
    life++;
    counter.innerHTML = `${11 - life}`;
}





