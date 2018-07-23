var choices = ["bounce","shake","wobble","bounceInLeft","bounceOutDown","fadeIn","fadeInLeftBig","fadeInUpBig","flash","headShake"] 
const sushi = document.querySelectorAll('img');

sushi.forEach(img => {
    img.addEventListener('click',function(){
        var random =  choices[Math.floor(Math.random() * choices.length)];
        img.className = "animated "+random
    })
});