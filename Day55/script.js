var display = document.getElementById('display');
var minute = 10;
var seconds = 0;

setInterval(time, 1000);

function time(){
    if(seconds == 0){
        minute--;
        seconds = 60;
    }
    else{
        seconds--;
    }

    display.innerHTML = minute +":"+seconds;
}