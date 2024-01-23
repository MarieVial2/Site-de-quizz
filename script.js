


let page = document.querySelector('body');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');

let navA = document.querySelectorAll('nav a');

//BOUTON MODE SOMBRE

let boutonSombre = document.getElementById('sombre');

// boutonSombre.onclick = function() {
//     page.setAttribute('style', "background-color : #222222; color : white;")
//     header.setAttribute('style', 'background-image: linear-gradient(rgba(50, 50, 50, 0.606), rgba(50, 50, 50, 0.298)), url(images/quizz.jpg);')
//     nav.setAttribute('style', 'background-color: #1d7e74')
//     footer.setAttribute('style', 'background-color: #1d7e74' )
// }

boutonSombre.addEventListener('click', function(){
    page.classList.toggle('themeSombre');
    nav.classList.toggle('nav-sombre');
    footer.classList.toggle('nav-sombre');
    header.classList.toggle('header-sombre');
})

//BOUTON HAUT DE PAGE
// document.addEventListener('DOMContentLoaded', function() {
//     window.onscroll = function(ev) {
//       document.getElementById("haut-page").className = (window.pageYOffset > 100) ? "visible" : "invisible";
//     };
//   });
let hautPage = document.getElementById("haut-page");


window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
        hautPage.classList.remove("invisible");
    } else {
        hautPage.classList.add("invisible");
    }
})




// MENU

window.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    if (window.scrollY > 400) {
        nav.classList.remove("nav-scroll");
    } else {
        nav.classList.add("nav-scroll");
    }
})

//POINTS

const box = document.querySelector("#question1 input");

box.addEventListener('click', function() {
    if (box.classList == "reponse-correcte") {
        box.nextSibling.style.color = "green";
    } else {
        box.nextSibling.style.color = "red";
    }
})



// ReTOUR HAUT DE PAGE SMOOTH

const bouton_haut = document.querySelector("#haut-page a");

bouton_haut.addEventListener('click', function() {
    header.scrollIntoView({behavior: "smooth"});
})