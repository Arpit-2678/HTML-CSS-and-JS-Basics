'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector(".dice");
const diceRoll = document.querySelector('.btn--roll');
const diceNew = document.querySelector('.btn--new');
const diceHold = document.querySelector('.btn--hold');

diceEL.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let stateOfPlaying = true;


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  };
  
const reset = function () {
    stateOfPlaying = true;
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`#current--0`).textContent = currentScore;
    document.querySelector(`#current--1`).textContent = currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    document.getElementById(`score--1`).textContent =
        scores[activePlayer];
};

//  Rolling  a dice
diceRoll.addEventListener('click', function () {
    //  generating random number
    if (stateOfPlaying) {
        const num = Math.trunc(Math.random() * 6) + 1;
    
        //  displaying dice on screen
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${num}.png`;

        if (num !== 1) {
            currentScore += num;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();

        }
    }

});

diceHold.addEventListener('click', function () {

    //   displayin globally the score
    if (stateOfPlaying)
        {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    
    if (scores[activePlayer] >= 20) {
        stateOfPlaying = false;
        diceEL.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
        // switching player
        currentScore = 0;
        switchPlayer();
    }
}

    
});

diceNew.addEventListener('click', reset);
