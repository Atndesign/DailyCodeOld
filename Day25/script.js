const menu = document.querySelector('.responsiveMenu');
const burgerWrapper = document.querySelector('.glyphicon-menu-hamburger');
const cross = document.querySelector('.glyphicon-remove');


burgerWrapper.addEventListener('click', open);
cross.addEventListener('click', close)



function open(){
    menu.style.width = "100vw";
}
function close(){
    console.log('fermé')
    menu.style.width = "0";
}