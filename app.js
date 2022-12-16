// Added two functions called "menu" and "menuLinks".
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Added eventListener that allows for a drop-down menu on mobile.

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});