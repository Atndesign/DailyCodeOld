$(document).ready(function () {

    function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};



    
    for (i = 0; i < 200; i++) {5
        
        let div = document.createElement('div');
        $(div).addClass("box");
        $("body").append(div);
        
    }
    $('div').mouseenter(function () {
        
        $(this).css("border", "2px solid white")
    })
    
    $('div').mouseleave(function () {
        
        $(this).css("border", "0px solid white")
    })
    
    let choices = document.querySelectorAll('div');
    
    setInterval(function(){
        
        let backgroundColor = randomColor();
        
        acctualDiv = Math.floor(Math.random() * choices.length);
        let choice = choices[acctualDiv];
        
       
    choice.style.background = backgroundColor;
    },100)
});