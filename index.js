let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " | " + secondCard;
    if(sum < 21){
        message = "Do you want to draw another card?";
    } else if(sum === 21){
        message = "Congratulations, you got blackjack!";
        hasBlackjack = true;
    } else {
        message = "Sorry, you lost, you are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    let card = 5;
    sum += card;
    renderGame();
}
console.log(message);