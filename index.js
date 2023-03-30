function eventFunction() {
    console.log('I have clicked on the document')
}

document.addEventListener('click', eventFunction);

document.removeEventListener('click', eventFunction);

const content = document.querySelector('#list');

function e(event) {
    console.log(event);
}

content.addEventListener('click' , e );

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('worked');
});

//Learning how to use phases
let myDiv = document.createElement('div');

function parastatus(event) {
    console.log('I have clicked on the para' + event.target.textContent)
}

myDiv.addEventListener('click' , parastatus);


for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;


    myDiv.appendChild(newElement)

}

document.body.appendChild(myDiv);

let wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('click', function(event){
    console.log('clicked on span' + event.target.textContent)
})


