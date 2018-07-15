const menu = document.querySelector('.menu');
const burgerWrapper = document.querySelector('.burgerWrapper');
const cross = document.querySelector('.cross');


burgerWrapper.addEventListener('click', open);
cross.addEventListener('click', close)



function open(){
    menu.style.display = "block";
}
function close(){
    menu.style.display = "";
}