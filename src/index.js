import './less/index.less'

// Your code goes here!

// Mouseover
let navLinks = document.querySelectorAll('.nav').forEach(navLinks => navLinks.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
}));

// Double Click ang Toggle
let biggerImg = document.querySelector('img')
biggerImg.addEventListener('dblclick', function(event) {
    biggerImg.classList.toggle('large');
});

// 