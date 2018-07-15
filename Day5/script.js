const numbersTxt = document.querySelector('.Numbers');
const luckyNumber = document.querySelector('.Lucky');
const button = document.querySelector('button');


function createLoto(){
    var array = []
    for(step = 0; step < 5; step++){
        var randomNumber = Math.floor(Math.random() * 45 + 1);
        array.push(randomNumber);
        var strArr = array.map(function(e){return e.toString()});
        strArr.join('');
        console.log(strArr);
        }
    var randomNumber2 = Math.floor(Math.random() * 45 + 1);
    numbersTxt.textContent = strArr;
    luckyNumber.textContent = randomNumber2;
    button.textContent = "Good Luck";
    setTimeout(function () {
        button.textContent = "Random Number";
    }, 2000)
}