// JavaScript Document
console.log("hi");

var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]
var themaSwitcherButton = document.querySelector('footer button');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function themaSwitcher(){
    console.log('halloween')
    document.documentElement.classList.toggle('halloween');
}

themaSwitcherButton.addEventListener('click', themaSwitcher);