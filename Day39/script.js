let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// VAr




// Function
function Circle(x, y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        // ctx.rect(this.x,this.y,5,50);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    this.update = ()=>{
        this.x+= this.dx;
        this.y += this.dy;
        
        if(this.x + this.radius > innerWidth || this.x +this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y + this.radius < 0){
            this.y = -Math.random() * 200;
        }

        this.draw();
    }

}

var circleArray = [];

for(i =0; i< 50;i++){
    
    var x = Math.random() * innerWidth;
    var y = -Math.random() * 200;
    console.log(y);
    var dx = 0;
    var dy = -(Math.random() - 0.5 * 40);
    var radius = Math.random() * 10;
    circleArray.push(new Circle(x,y,dx,dy,radius,));
}



function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(i =0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    // var x = Math.random() * innerWidth;
    // var y = Math.random() * innerHeight;

  
}
animate()