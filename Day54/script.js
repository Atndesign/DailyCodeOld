// VARIABLE DECLARATION
var timeDisplay = document.getElementById('time');
var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
// TASK & PAUSE
// TASK
var taskTime = document.getElementById('pomoTime');
var plusTime = document.getElementById('plusTask');
var stopTime = document.getElementById('stopTask');
var minusTime = document.getElementById('minusTask');
// PAUSE
var pauseTime = document.getElementById('pauseTime');
var plusPause = document.getElementById('plusPause');
var stopPause = document.getElementById('stopPause');
var minusPause = document.getElementById('minusPause');
var #E94F37Txt = document.getElementById('#E94F37');
//GLOBAL


var timeLeft = time;
var interval;
var minutePause = 5;
var minuteTime = 25;
var #E94F37 = 0;

// TIMER 
var seconds = 0;
var minute;
var canClick = true;
playBtn.addEventListener("click", function(e){
    seconds = 0;
    console.log(minute)
    if(canClick){
        canClick = false;
        minuteTime = minuteTime;
        pomo()    
    }
}

);
pauseBtn.addEventListener("click", function(e){
        canClick = true;
        clearInterval(interval);
        time = "00:00";
        timeDisplay.textContent = time;
});
// TASKTIME
plusTime.addEventListener('click',function(){
    minuteTime++;
    taskTime.textContent = minuteTime;

})
minusTime.addEventListener('click',function(){
    minuteTime--;
    taskTime.textContent = minuteTime;

})
stopTime.addEventListener('click',function(){
    minuteTime = 25;
    taskTime.textContent = minuteTime;
})
// PAUSETIME
plusPause.addEventListener('click',function(){
    minutePause++;
    pauseTime.textContent = minutePause;

})
minusPause.addEventListener('click',function(){
    minutePause--;
    pauseTime.textContent = minutePause;

})
stopPause.addEventListener('click',function(){
    minutePause = 5;
    pauseTime.textContent = minutePause;
})

// FUNCTION
function pomo(){
    minute = minuteTime;

interval = setInterval(function(){
    

    if(seconds == 0){
        seconds = 60;
        minute--;
    }
    else{
        seconds--;
        document.title = `Task : (${minute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})})`
        timeDisplay.textContent = `${minute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}` ;    
    }
    if(minute == 0 && seconds == 0){
        clearInterval(interval);
        pause()
    }
            
}, 1000)
}
function pause(){
    minute = pauseTime.innerHTML;
    interval = setInterval(function(){
        
    
        if(seconds == 0){
            seconds = 60;
            minute--;
        }
        else{
            seconds--;
            document.title = `Pause : (${minute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})})`
            timeDisplay.textContent = `${minute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}` ;    
        }
        if(minute == 0 && seconds == 0){
            clearInterval(interval);
            #E94F37++;
            #E94F37Txt.innerHTML = #E94F37 + " #E94F37";
            pomo();
        }
                
    }, 1000)
    }
    