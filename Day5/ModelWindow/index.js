'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


// opening the model
const openModal = () => {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

//closing the model
const closeModel = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i=0; i< btnShowModal.length; i++){
    console.log(btnShowModal[i].addEventListener('click', openModal));
}

btnCloseModal.addEventListener('click' , closeModel);

overlay.addEventListener('click' ,closeModel);

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModel();
    }
})

