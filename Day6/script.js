const timeTxt = document.getElementById('time');

setInterval(() => {
var now = new Date().getTime();
var event = new Date("August 17, 2019 00:00:00").getTime();

var timeLeft = event - now;

var sec = Math.floor(timeLeft/1000);
var min = Math.floor(sec/60);
var hour = Math.floor(min/60);
var day = Math.floor(hour/24);

hour = hour % 24;
min%=60;
sec%=60;

if(hour < 10){
  hour = "0" + hour;
}
if(min < 10){
  min = "0" + min;
}
if(sec < 10){
  sec = "0" + sec;
}

timeTxt.innerHTML = day + "Days " + hour + "hr " + min + "min " + sec +"sec";

},1000)