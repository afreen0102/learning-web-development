'use strict';

// getElementById is faster than queryselector
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = () => {
   scores = [0,0]; 
   currentScore = 0;
   activePlayer = 0;
   playing = true;

   current0El.textContent = 0;
   current1El.textContent = 0;
   score0El.textContent = 0;
   score1El.textContent = 0;
   
   diceEl.classList.add('hidden');
   player0El.classList.remove('player--winner');
   player1El.classList.remove('player--winner');
   player0El.classList.add('player--active');
   player1El.classList.remove('player--active');
   
};

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

// Rolling dice functionality
const buttonRoll = function() {

   if(playing) {
   
      // 1. Genearting a random dice roll
      const dice = Math.trunc(Math.random() *6) + 1;

      // 2 . Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `assets/dice-${dice}.png`

      // 3 . Check for rolled 1
      if(dice !== 1){
      // Add dice to current score
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      }else{
      // Switch to next player
        switchPlayer();
    
      }
   } 
}

const buttonHold = () => {

   if(playing) {

      // 1. Add current score o active player's score
      scores[activePlayer] += currentScore;
      console.log(scores[activePlayer]);
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      // 2. Check if player's score is >= 100
         if(scores[activePlayer] >= 20) {  
            // Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');

         } else{
            // Switch to the next player 
            switchPlayer(); 
      }  
   }  
}



btnRoll.addEventListener('click', buttonRoll);

btnHold.addEventListener('click', buttonHold);

btnNew.addEventListener('click', init);
