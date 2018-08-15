$(document).ready(function () {

            //Variables 
            let sequence= [];
            let square = $('.color');
            let toCheck = false;
            let userInput = [];
            let level = 1;


            let random = ()=> {
                let random = Math.floor((Math.random() * 4) + 1);
                sequence.push(random)
                console.log(sequence);
            }

            let lightUp = (tile) => {
                var $target = $('[data-target=' + tile + ']').addClass('active');
                window.setTimeout(function () {
                    $target.removeClass('active');
                }, 300);

            
            }
            let Makesound = (item) =>{
                var audio = document.querySelector(`audio[data-target="${item}"]`);
                console.log(audio)
                audio.currentTime = 0;
                audio.play();
            }

                let animate = (sequence) => {
                    random();
                    let i = 0;
                    let interval = setInterval(() => {

                        lightUp(sequence[i]);
                        Makesound(sequence[i]);

                        i++;
                        if (i >= sequence.length) {
                            clearInterval(interval);
                        }
                       
                    }, 600);
                }

                //Start
                $('button').click(function () {
                    level= 1;
                    userInput = [];
                    animate(sequence);
                })
                $('.color').click(function(){
                    let i = 0;
                    Makesound($(this).data('target'));
                    userInput.push($(this).data("target"));
                    if(userInput.length == sequence.length){
                        if(userInput.join() == sequence.join()){
                            i++;
                            console.log('good');
                            level++;
                            $('h2').text(`Step ${level}`)
                            userInput = [];
                            animate(sequence);
                        }
                        else{
                            $('h2').text(`Try again`)
                            sequence = [];
                            level = 1;

                        }
                        console.log(userInput)
                }
                })
                //Wait for the user input
                //Check the user input
               
            })