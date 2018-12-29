$(document).ready(function () {
    
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    // VAr
    
    let blockSize = 30;
    let direction = "right";
    let circle = new Circle(400,400,direction);

    // Function
    function Circle(x, y,direction) {
        this.x = x ;
        this.y = y;        
        this.draw = function () {
            
            ctx.beginPath();
            ctx.rect(this.x,this.y,blockSize,blockSize);
            ctx.fillStyle =`rgb(255, 255, 255)`;
            ctx.fill();
        }
        this.update = function (direction) {
            this.direction = direction;
            switch(direction){
                case "left":
                this.dx = -5 - blockSize;
                this.dy = 0;
                break
                case "up":
                this.dx = 0;
                this.dy = -5  - blockSize;
                break
                case "down":
                this.dx = 0;
                this.dy = 5  + blockSize;
                break
                case "right":
                this.dx = 5  + blockSize;
                this.dy = 0;
                break
                default:
                this.dx = 0;
                this.dy = 0;
            } 
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x + 10 > innerWidth || this.x + 10 < 0) {
                this.dx = -this.dx;
            }
            if (this.y + 10 > innerHeight || this.y + 10 < 0) {
                this.dy = -this.dy;
            }
            
            this.draw();
        }    
}
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        circle.update();
        
    }
    setInterval(animate,200);
    

    document.addEventListener('keypress',function(e){
        switch(e.keyCode){
            case 113:
                direction = "left";
                break
            case 115:
                direction = "down";
                break
            case 100:
                direction = "right";
                break
            case 122:
                direction = "up";
                break
        }
        circle.update(direction);

    })
        
        
})