const menu = document.querySelector('.menu');
const NavMenu = doument.querySelector('nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})