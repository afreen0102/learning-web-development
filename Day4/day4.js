"use strict"; // Using strict mode will help you find bugs.
              // Like spelling mistakes while using a declared variable.
              // Using Keywords as variable names 
              
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;                   

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
    }
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;               
        }
        else{
            document.querySelector('.message').textContent = 'You Lost The Game!';
            document.querySelector('.score').textContent = 0;               
        }
            
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;                   
    }

} )

