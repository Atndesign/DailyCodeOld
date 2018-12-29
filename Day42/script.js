$(document).ready(function () {
    
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    // VAr
    let cats = [];
    let image = null;
    catImages = ["http://pngimg.com/uploads/cat/cat_PNG50516.png","http://pluspng.com/img-png/cat-hd-png-cat-png-image-download-picture-kitten-png-image-1490.png","http://purepng.com/public/uploads/large/515023046579hvzohbmnlxqbdyqs1460y3msjygqbzq450jwkjlptpcrykihbss3ghbemg2ezgowfepfgdhheo0rziqr1ogu7qacx3zdqxltsnc.png","http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png"];

    // Function
    function Cat(src,x, y,dx,dy) {
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
                cats.shift();

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
            }
            ctx.beginPath();
            ctx.drawImage(src,this.x,this.y,124,124)
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
    let index =0;
    $("canvas").click(function(e){
        e.preventDefault();
        
        x = e.clientX - 124;
        y = e.clientY - 124;
        for(i = 0; i < 4;i++){
            if(index >= 4){
                index = 0 
            }
            image = new Image();
            image.src = catImages[index];
            
            dx = Math.random()* 10;
            dy = Math.random()* 10 ;
            cats.push(new Cat(image,x,y,dx,dy));
            index++;
        }     
        console.log(cats);

    })


    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        for(i = 0; i < cats.length;i++){
            cats[i].update();
        }        
    }
    
animate();

})