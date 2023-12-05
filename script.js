const menu_navbar = document.querySelector('.menu-navbar');
document.querySelector('#hamburger').onclick = () => {
menu_navbar.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !menu_navbar.contains(e.target)) {
        menu_navbar.classList.remove('active');
    }
});