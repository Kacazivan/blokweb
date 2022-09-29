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
    changeImage();
};

themaSwitcherButton.addEventListener('click', themaSwitcher);


//https://www.youtube.com/watch?v=1j-XMwrLcg8 --> dit filmpje heeft me geholpen
function changeImage(){
    console.log('change logo')
    var displayImage = document.getElementById('origineelLogo')

    if (displayImage.src.match('images/logoHalloween.png')){
        displayImage.src = 'images/logoHalloweenWit.png'
    }else{
        displayImage.src = 'images/logoHalloween.png'
    }
};
