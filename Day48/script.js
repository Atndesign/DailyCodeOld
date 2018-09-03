$('document').ready(function(){
    
})

let choices = ["Pile","Face"];

function spinny(){
    $('.container img').addClass("spin")
    setTimeout(function(){
        let result = choices[Math.floor(Math.random() * choices.length)];
        $('#result').text(result);
    $('.container img').removeClass("spin");

    },1000)
    return;
}