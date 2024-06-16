const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.Navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    Navbar.classList.remove('active');
};