$(document).ready(function () {
    
    let choices = ['white','black'];

    function randomColor() {
        let i = Math.floor(Math.random() * choices.length);
        console.log(i)
        console.log(choices[i]);

        return choices[i];
	};
    
    console.log(randomColor());
    
    let box = $('.box');
    let i = 0;


    setInterval(function(){
        let backgroundColor = randomColor();
        if(i > box.length){
            i = 0;
        }
        else{
            box[i].style.background = backgroundColor ;
            i++;
        }
        
    },10)
});