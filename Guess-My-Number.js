'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
//  click event functionality...
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    //  if user has not selcted any number.
    if (!guess) {
        displayMessage("⛔ Not Selected a number!!");
    }

    // if user has guessed a secret number. 
    else if (guess === secretNumber) {
        displayMessage("🎉🎉 Hurray you guessed a correct number 🔥🔥");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#047aed";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
        
        //  if gussed number is other than secret number
    else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high than a number 📈" : "Too low than a number 📉");
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            displayMessage("Sorry you lost the game😢😢");
            score--;
            document.querySelector(".score").textContent = score;
        }

        }      
});


// Play again functionality ...
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value='';
    
 });
