
let cards = []// array-ordered list of items
console.log(cards)
let sum = 0
console.log(sum)
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
//test that i am grabbing the correct variable
console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//test that i am grabbing the correct variable
console.log(sumEl)
let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)

let player = {
    name: "Amir",
   chips: 145
}


let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20){
        message = "Would you like to draw another card?";
    }else if (sum === 21){
        message = "Congratulations, you have BlackJack! You win!";
        hasBlackJack = true;
    }else {
        message = "You loose!";
        isAlive = false
    }

        // IS ALIVE
    console.log(isAlive)
    // CASH OUT!
    console.log(hasBlackJack)
    // MESSAGE VARIABLE
    messageEl.textContent = message
    // SUM PARAGRAPH
    sumEl.textContent = "Sum: " + sum
    //CARDS PARAGRAPH
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}



function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let drawCard = getRandomCard()
    sum += drawCard
    cards.push(drawCard)
    console.log(cards)
    renderGame()
    }
    
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    }else {
        return randomNumber;
    }
}

