import './less/index.less'

// Your code goes here!

// Mouseover
let navLinks = document.querySelectorAll('.nav').forEach(navLinks => navLinks.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
}));

let titles = document.querySelectorAll('h2').forEach(titles => titles.addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
}));

//Mouseleave
navLinks = document.querySelectorAll('.nav').forEach(navLinks => navLinks.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'black';
}));

navLinks = document.querySelectorAll('h4').forEach(navLinks => navLinks.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'black';
}));

// Double Click ang Toggle
let biggerImg = document.querySelector('img')
biggerImg.addEventListener('dblclick', function(event) {
    biggerImg.classList.toggle('large');
});

// 
// MouseDown

const clickDown = document.querySelectorAll('h4').forEach(clickDown => clickDown.addEventListener('mousedown', function(event) {
    alert('Grrr!');
}));