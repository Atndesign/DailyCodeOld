$(document).ready(function () {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    // VAr




    // Function
    function Circle(x, y,dx,dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.dead = 500
        this.opacity = 1;

        this.draw = function () {
            this.dead--;
            this.opacity -= 0.005
            if(this.dead <= 0 ){
                this.dead = 0;
                circles = [];

                ctx.fillStyle = 'rgba(0, 0, 0,0.5)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
            }
            ctx.beginPath();
            ctx.arc(this.x, this.y,3, 0, 2 * Math.PI);
            ctx.fillStyle =`rgba(255, 255, 255,${this.opacity})`
            ctx.fill();
        }
        this.update = function () {
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
    let circles = [];

    $('canvas').click(function(e){
        e.preventDefault();
        x = e.clientX;
        y = e.clientY;
        // let dx = -10;
        // let dy = 10;
        
        // for(i =0; i< 20;i++){
        //     dx--;
        //     dy--;
        //     circles.push(new Circle(x,y,dx,dy));
            
        // }
            let dx = 10;
            let dy = 0;
            circles.push(new Circle(x,y,dx,dy));



            dx = -10 ;
            dy = 0;
            circles.push(new Circle(x,y,dx,dy));
            
            dx = 0 ;
            dy = 10;
            circles.push(new Circle(x,y,dx,dy));

            dx = 0 ;
            dy = -10;
            circles.push(new Circle(x,y,dx,dy));
            
            dx = 10 ;
            dy = 10;
            circles.push(new Circle(x,y,dx,dy));

            dx = -10 ;
            dy = -10;
            circles.push(new Circle(x,y,dx,dy));
            
            dx = -10 ;
            dy = 10;
            circles.push(new Circle(x,y,dx,dy));

            dx = 10 ;
            dy = -10;
            circles.push(new Circle(x,y,dx,dy));
     

    })


    
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0, 0, 0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for(i = 0; i < circles.length;i++){
            circles[i].update();
        }
    }
    animate()
})