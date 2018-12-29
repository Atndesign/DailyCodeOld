$(document).ready(function(){
    $("body").css("background", "black")
    
    let code = ["38", "38","40","40","37","39","37","39","66","65"];

    let input = [];

    document.body.addEventListener('keydown', function(e){
        input.push(e.keyCode)
        input.splice(-code.length - 1, input.length - code.length);
        if(input.join("") == code.join('')){
            console.log('ding ding')
        $("body").css("background", "url('https://i.ytimg.com/vi/zZ0OqbraHy0/maxresdefault.jpg')")
        $('h1').text('Congrats you unlocked the arcade city');
        
        };        
    })
})