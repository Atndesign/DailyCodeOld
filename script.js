const menu = document.querySelector('.menu');
const burgerWrapper = document.querySelector('.burgerWrapper');
const cross = document.querySelector('.cross');


burgerWrapper.addEventListener('click', open);
cross.addEventListener('click', close)



function open(){
    menu.style.width = "100vw";
}
function close(){
    menu.style.width = "0";
}