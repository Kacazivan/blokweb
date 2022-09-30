// JavaScript Document
console.log("hi");

var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]
var themaSwitcherButton = document.querySelector('footer button');
var spinElement = document.querySelector('.spinAnimatie');
var spookjeElement = document.querySelector('.spookje');
var vleermuisElement = document.querySelector('.vleermuis');
var hoedElement = document.querySelector('.hoed');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


function themaSwitcher(){
    console.log('halloween');
    document.documentElement.classList.toggle('halloween');
    changeImage();
    if(spinElement){
        spinElement.classList.toggle('block');
    }
    if(spookjeElement){
        spookjeElement.classList.toggle('block');
    }
    if(vleermuisElement){
        vleermuisElement.classList.toggle('block');
    }
    if(hoedElement){
        hoedElement.classList.toggle('block')
    }
};

themaSwitcherButton.addEventListener('click', themaSwitcher);

themaSwitcherButton.addEventListener('click', function(){
    setTimeout (function(){
        vleermuisElement.style.display = "none";
    }, 8800);

    setTimeout (function(){
        spinElement.style.display = "none";
    }, 8200);
});


//https://www.youtube.com/watch?v=1j-XMwrLcg8 --> dit filmpje heeft me geholpen
function changeImage(){
    console.log('change logo');
    var displayImage = document.getElementById('origineelLogo');

    if (displayImage.src.match('images/logoHalloween.png')){
        displayImage.src = 'images/logoHalloweenWit.png'
    }else{
        displayImage.src = 'images/logoHalloween.png'
    }
};
