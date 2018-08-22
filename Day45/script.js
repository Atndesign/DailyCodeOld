let canvas = document.querySelector("canvas");
canvas.width = 900;
canvas.height = 600;

// Global variable

let canvasHeight = canvas.height;
let canvasWidth = canvas.width;
let ctx = canvas.getContext("2d");
let blockSize = 30;
let delay = 100;
let xCoord = 0;
let yCoord = 0;
let snakee;
let Applee;
let widthInBlock = canvasWidth / blockSize;
let heightInBlock = canvasHeight / blockSize;
let score;
let canRestart;
init();


function init(){
    canRestart = false;
    score = 0;
    snakee = new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]], "right");
    Applee = new Apple([10,10]);
    canvas.style.margin = "50px auto";
    canvas.style.backgroundColor = "#ddd";
    update();
};

function update(){

    if(snakee.checkCollision()){
        gameOver();
    }
    else{
        if(snakee.eatingApple(Applee)){
            score++;
            snakee.ateApple = true;
            do{
                Applee.setNewPosition();
            }
            while(Applee.isOnSnake(snakee)){
                Applee.setNewPosition();
            }
            //Le serpent a manger la pomme
        }
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        drawScore()
        snakee.draw();
        Applee.draw();
        setTimeout(update,delay);
    }
    snakee.forward();
    
}

function restart()
{
    snakee = new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]], "right");
    Applee = new Apple([10,10]);
    let score = 0;
    canRestart = false;
    update();
}

function drawScore(){
    ctx.save();
    ctx.font = "bold 200px sans-serif";
    ctx.fillStyle = "grey";
    ctx.textAlign = "center";
    let centerX = canvasWidth / 2;
    let centerY = canvasHeight / 2;
    ctx.textBaseline = "middle";
    ctx.fillText(score.toString(), centerX,centerY);
    ctx.restore();
}

function gameOver()
{
    ctx.save();
    canRestart = true;
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle =  "#000";
    ctx.fillText("Game Over", 5,30)
    ctx.fillText("Press space key to restart", 5,80)
    score = 0;
    ctx.restore();
}

function drawBlock(ctx,position)
{
    let x = position[0] * blockSize;
    let y = position[1] * blockSize;
    ctx.fillRect(x,y,blockSize,blockSize)
};

// Snake OBject

function Snake(body,direction)
{
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
    this.draw = function()
    {
        ctx.save();
        ctx.fillStyle = "#ff0000";
        for(let bodyElm = 0; bodyElm < this.body.length; bodyElm++){
            drawBlock(ctx,this.body[bodyElm]);
        }
        ctx.restore();
    }
    this.forward = function(){
        let newPosition = this.body[0].slice();
        switch(this.direction){
            case "left":
                newPosition[0]-= 1;
            break;
            case "right":
                newPosition[0]+= 1;
            break;
            case "down":
                newPosition[1]+= 1;
            break;
            case "up":
                newPosition[1]-= 1;
            break;
            default:
        }
        this.body.unshift(newPosition);
        if(!this.ateApple)
            this.body.pop();
        else{
            this.ateApple = false;
        }
    } 
    this.setDirection = function(newDirection){
        let allowedDirection;
        switch(this.direction){
            case "left":
            case "right":
                allowedDirection = ["up","down"];
            break;
            case "down":
            case "up":
                allowedDirection = ["left","right"];
                ;
            break;
            default:
        }
        if(allowedDirection.indexOf(newDirection)> -1){
            this.direction = newDirection;
        }
    }
    // Check for collision
    this.checkCollision = function(){
        ("Full Snake = " + this.body)

        let wallCollision = false;
        let snakeCollision = false;
        let head = this.body[0];
        ("Head = " + head)
        let rest = this.body.slice(1);
        ("Rest = " + rest)

        let snakeX = head[0]
        let snakeY = head[1]
        let minX = 0;
        let minY = 0;
        let maxX = widthInBlock - 1;
        let maxY = heightInBlock - 1;
        let isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
        let isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

        if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls){
            ("between walls :" + isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
            wallCollision = true;
        }

        for(var i=0; i< rest.length; i++){
            if(snakeX === rest[i][0] && snakeY === rest[i][1]){
            ("Touch the snake :" + head +" " + rest)
            snakeCollision = true;
            };
        }
        return snakeCollision || wallCollision;

    }
    this.eatingApple= function(appleToEat){
        let head = this.body[0];
        if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])
            return true;
        else 
            return false;
    }
}

// Apple OBject

function Apple(position){
    this.position = position;
    this.draw = function()
    {
        ctx.save();
        ctx.fillStyle='#33cc33';
        ctx.beginPath();
        let radius = blockSize/2;
        let x = this.position[0] * blockSize + radius; 
        let y = this.position[1] * blockSize + radius; 
        ctx.arc(x,y,radius,0,Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }
    this.setNewPosition = function(){
        let newX = Math.round(Math.random() * widthInBlock - 1);
        let newY = Math.round(Math.random() * heightInBlock - 1);
        this.position = [newX,newY];
        console.log(this.position)
    }
    this.isOnSnake = function(snakeToCheck){
        var isOnSnake = false;

        for(let i = 0; i < snakeToCheck.body.length; i++){
            if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]){
                isOnSnake = true;
            }
        }
        return isOnSnake;
    }
}



//  Handle Key Pressed
document.onkeydown = function(e){
    let newDirection;
    switch (e.keyCode){
        case 37:
        newDirection = "left"
        break
        case 38:
        newDirection = "up"
        break
        case 39:
        newDirection = "right"
        break
        case 40:
        newDirection = "down"
        break
        case 32:
        if(canRestart){
            restart();
            return;
        }
    }
    snakee.setDirection(newDirection);
}
