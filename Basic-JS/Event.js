function showAlert() {
  alert("clicked");
}

addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM is fully loaded");
});
addEventListener("load", (event) => {
  console.log("The DOM is fully loaded");
});
addEventListener("beforeload", (event) => {
  event.preventDefault();
  console.log("The DOM is fully loaded");
  event.returnValue = "";
});
addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM is fully loaded");
});
window.onload = (event) => {
  console.log("THe page is fully loaded");
};
let btn8 = document.querySelector("#btn8");

// disable context menu when right-mouse clicked
btn8.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// show the mouse event message
btn8.addEventListener("mouseup", (e) => {
  let msg = document.querySelector("#message");
  switch (e.button) {
    case 0:
      msg.textContent = "Left mouse button clicked.";
      break;
    case 1:
      msg.textContent = "Middle mouse button clicked.";
      break;
    case 2:
      msg.textContent = "Right mouse button clicked.";
      break;
    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`;
  }
});

let textBox = document.getElementById('message');
textBox.addEventListener('keydown', (event) => {
    console.log(`key = ${event.key}, code=${event.code}`);
});

window.addEventListener('scroll',(event) =>{
    console.log('Scrolling...');
});

let Scroll = document.querySelector('.ScrollBtn');
let el = document.querySelector('.special');

Scroll.addEventListener('click', function (){
    el.scrollIntoView(true);
});


const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor='yellow';
});

pwd.addEventListener('blur',(e) => {
    e.target.style.backgroundColor='';
});


