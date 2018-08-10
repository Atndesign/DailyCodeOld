$(document).ready(function () {

    let getTime = () =>{
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let text = document.querySelector('h1');
    
    hour < 10 ? hour = "0" + hour : hour; 
    min < 10 ? min = "0" + min : min; 
    sec < 10 ? sec = "0" + sec : sec; 
    
    
    text.innerHTML= hour + ":" + min + ":" + sec;
}

setInterval(getTime, 1000);

});