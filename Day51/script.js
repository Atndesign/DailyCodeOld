let playBtn = document.getElementById("play");

let scoreText =  document.querySelector("h1")
let score = 0;
let marginTop = 0;
let speed = 2;
playBtn.addEventListener("click",()=>{
    playBtn.style.display = "none";
    document.getElementById('ghost').style.display = "none";
    play()
})

let play =()=>{
    clickable = true        
    document.getElementById('pumpkin').style.marginTop = 0;
    let bounceInterval = setInterval(()=>{
        marginTop = marginTop + speed; 
        scoreText.textContent = `You catched ${score} Pumpkins`;
        document.getElementById('pumpkin').style.marginTop = marginTop+"px" ;
        if(marginTop>300){
            speed = -speed;   
        }
        else if(marginTop < 0){
            speed = -speed;   
        }
        console.log(speed)
    },10)
    
    document.getElementById('pumpkin').addEventListener("click",()=>{
        score++;
       if(speed < 20){
           speed *= 1.2;
       }
       else if(speed > 20){
           speed = 25;
       }

       if(score == 20){
        clearInterval(bounceInterval)
        scoreText.textContent = `You won!`;           
       }
    })
} ;

