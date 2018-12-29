choices = ['Maybe who knows','Yes definitely','Hell no', 'Hmmmmmm... maybe?','Indeed','Never think of it again',"I don't even know"]
let click = false;
$('document').ready(function(){
    $(".ball").on('click',()=>{
        if(click){

        }
        else{
            randomAnswer();
        }
    })

    function randomAnswer(){
        click = true;
        let choice = choices[Math.floor(Math.random()*choices.length)]
        console.log(choice)
        $('h1').hide(200);
        $('p').text(`${choice}`);
        $('p').show(200);
        setTimeout(()=>{
            $('p').hide(200);
            $('h1').show(200);
            click = false;
        },2000)
    }
});