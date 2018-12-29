const cupcakeImg = document.querySelector(".imgBox");
const text = document.querySelector('h1');
const check = document.querySelector('.check')
const icon = document.getElementById('icon');

function Error(){
    cupcakeImg.style.backgroundImage = "url('./img/BadCupCake.svg')";
    text.textContent = "Something went wrong with your order";
    check.style.backgroundColor  = "#ffcaca";
    icon.className = "fas fa-times"
}