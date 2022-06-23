const hamb = document.querySelector('#hamb');
const navbarMenu = document.querySelector('#navbar-menu');
hamb.addEventListener('click', function() {
    hamb.classList.toggle('hamb-active');
    navbarMenu.classList.toggle('hidden');
})

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;
    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}