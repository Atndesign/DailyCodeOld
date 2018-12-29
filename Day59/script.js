var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function SnowBall(x,y,radius, dy){
    this.x = x;
    this.y = y;
    this.radius = radius
    this.dy = dy;

    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(this.x, this.y ,this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    }
    this.update = function(){
        if(this.y > innerHeight){
            this.y = -100;
        }
        this.y += dy;

        this.draw();
    }

}
var circleArray = [];

function init(){
    circleArray = [];
for (var i = 0; i < 50; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dy = Math.random() * 3 +2;
    
    circleArray.push(new SnowBall(x , 0 ,radius, dy));
}
}
function animate(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (var i=0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
setInterval(animate,10);
init();

