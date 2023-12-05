const element = document.getElementById('para');
console.log(element);
let elements = document.getElementsByName(name);
console.log(elements);

let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
rates.forEach((rate) => {
    if(rate.checked){
        output.innerText=`You selected ${rate.value}`;
    }
})
});



//GETELEMENTSBYTAGNAME

const btn1= document.getElementById('btnCount');

btn1.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h2');
    let paragraph = document.getElementsByTagName('p');

    alert(`The number is H2: ${headings.length}`);
    alert(`The number is P: ${paragraph.length}`);
});


//GETELEMENSTBYCLASSNAME

let menu = document.getElementById('menu');
let items = document.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data);



//QUERY SELECTOR

let firstHeading = document.querySelector('h1');

let heading2 = document.querySelector('h2');
console.log(firstHeading);
console.log(heading2);

let note = document.querySelector('.menu-item');
console.log(note);
let notes = document.querySelectorAll('.menu-item');
console.log(notes);
let logo1 = document.querySelector('#logo');
console.log(logo1);

let listItem = document.querySelector('li:nth-child(2)');
console.log(listItem);


//Get Parent ELement form parent Node
let curr = document.querySelector('.current');
let nextSib = curr.nextElementSibling;

let div = document.createElement('div');
div.innerHTML=`<p>Create Element</p>`;
document.body.appendChild(div);
div.id = 'content';
div.className='note';
//create text node

let text = document.createTextNode('Create Element Example');
div.appendChild(text);

document.body.appendChild(div);

//adding an elemment to div

let h2 = document.createElement('h2');
h2.textContent='Add h2 element to the div';
div.appendChild(h2);

document.body.appendChild(div);


//Createing new list items (li) example
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent= 'About US';

const menu2 =document.querySelector('#menu');
menu2.appendChild(li);

//JAVASCRIPT APPEND CHILD
function createMenuItem(name){
    let li = document.createElement('li');
    li.textContent=name;
    return li;
}

const menu3 = document.querySelector('#menu');
menu3.appendChild(createMenuItem('Furniture'));
menu3.appendChild(createMenuItem('Sevices'));
menu3.appendChild(createMenuItem('Facebook'));


//Create Element 

let div5 = document.querySelector('.container');

let p = document.createElement('p');

p.textContent ='JS DOM';
div5.appendChild(p);
div5.innerHTML += '<p>JS DOM</p>';

div5.innerHTML += '<p class="note"> JS DOM </p>';

let fragment = document.createDocumentFragment();

for(let i =0;i < 10;i++){
    let p6 = document.createElement('p');
    p6.textContent =`Paragraph ${i}`;
    fragment.appendChild(p6);
}
div5.appendChild(fragment);

let langauge=['JS','HTML','CSS','NODEJS','SCALA'];

let langEl = document.querySelector('#languages');

let fragment1= new DocumentFragment();

langauge.forEach((langauge) => {
    let li = document.createElement('li');
    li.innerHTML=langauge;
    fragment.appendChild(li);
});
langEl.appendChild(fragment);
menu.removeChild(menu.lastElementChild);

let input = document.querySelector('#username');
console.log(input.secured);

for(let attr of input.attributes){
    console.log(`${attr.name} = ${attr.value}`);
}



//JAVASCRIPT SET ATTRIBUTES
let btnSend = document.querySelector('#btnSend');
if(btnSend){
    btnSend.setAttribute('name','send');
    // btnSend.setAttribute('disabled','');
}

// function display(){
//     alert('It was send');
// }
// btnSend.addEventListener('click', display);



//OR shorter way
btnSend.addEventListener('click', function() {
    alert('It was send');
})

//JAVASCRIPT GET ATTRIBUTES
let link = document.querySelector('#js');
if(link){
    let target = link.getAttribute('target');
    console.log(target);
}
let style = getComputedStyle(link,':hover');
console.log(style);

let box = document.querySelector('.box');
let width = box.offsetWidth;
let height= box.offsetHeight;
console.log({width,height});

const domRect = box.getBoundingClientRect();
console.log(domRect);

link.addEventListener('click', function(event){
    console.log('clicked');
    event.preventDefault();
})
link.addEventListener('click', function(event){
    console.log('clicked');
    event.stopPropagation();
})