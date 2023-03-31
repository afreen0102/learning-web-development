
//Day 2

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

// Day3

let t1 = performance.now();
//adding 100 paragraphs
for (let i=1; i<=1000; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is the para' + i;

    document.body.appendChild(newElement);
}
let t2 = performance.now();

console.log("First loop took " + (t2-t1) + "ms");

let t3 = performance.now();

//Optimizing the above code
let newDiv = document.createElement('div');

for (let i=1; i<=1000; i++){
    let element = document.createElement('p');
    element.textContent = 'This is the para' + i;

    newDiv.appendChild(element);

}
document.body.appendChild(newDiv);
let t4 = performance.now();

console.log("Second loop took " + (t4-t3) + "ms");




function addPara() {
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMeassage() {
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);   
}

addPara();
appendNewMeassage();




