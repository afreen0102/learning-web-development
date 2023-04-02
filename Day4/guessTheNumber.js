"use strict"; // Using strict mode will help you find bugs.
              // Like spelling mistakes while using a declared variable.
              // Using Keywords as variable names 
              
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;                   

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    }

    //when the player wins
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;  
        }
        // document.querySelector('.container').style.backgroundColor = '#5cbdb9';
        // document.querySelector('.container').style.color = 'white';
        // document.getElementsByClassName('again').style.backgroundColor = 'white';
        // document.querySelector('h1').style.color = 'white';
        // document.getElementsByClassName('btn').style.color = '#5cbdb9';
        
    }

   //when the guess is wrong

   else if( guess !== secretNumber){
    if(score > 1){
        console.log('gate 1');
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too Low!';
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;               
    }
    else{
        // document.querySelector('.message').textContent = 'You Lost The Game!';
        displayMessage('You Lost The Game!');
        document.querySelector('.score').textContent = 0;               
    }
   }
    //when the the number is too high
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         console.log('gate 1');
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;               
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost The Game!';
    //         document.querySelector('.score').textContent = 0;               
    //     }
            
    // }

    //when the guess is too low
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         console.log('gate 2');
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;  
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You Lost The Game!';
    //         document.querySelector('.score').textContent = 0;   
    //     }
                         
    // }

} )

document.querySelector('.again').addEventListener('click' , () => {
    score = 20;
    document.querySelector('.score').textContent = score;  
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

})

