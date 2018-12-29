$(document).ready(function () {
    let image = $('img');

    setInterval(function(){
        image.addClass('animated tada ');
        setTimeout(function(){
        image.removeClass('animated tada ');
        },3000);
    },6000)

});