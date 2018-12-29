$(document).ready(function () {
    $('.pop').hide();

    let voted = false;
    // $('.voteContainer').click(function(){
    //     switch(this.id){
    //         case "vote1":
    //         $("#vote1").css("font-size", "1.2em");
    //         break;
    //         case "vote2":
    //         $("#vote2").css("font-size", "1.2em");
    //         break;
    //         case "vote3":
    //         $("#vote3").css("font-size", "1.2em");
    //         break;
    //         default:
    //         console.log("Ahhhhhhhhhh");
    //     }
    // })

    $('.voteContainer').click(function () {
        if (!voted) {
            $('.circle').animate({
                width: "400vw",
                height: "400vh",
                borderRadius:"0"
            }, 1000);
            $('#questions').hide("slow");
            $('.pop').show("slow");

            $('.btn').click(function () {

                console.log(this.dataset.key);
                switch (this.dataset.key) {
                    case "no":
                        $('.circle').animate({
                            width: "350px",
                            height: "350px",
                            borderRadius:"100%"
                            
                        }, 1000);
                        $('#questions').show("slow");
                        $('.pop').hide("slow");
                        break;
                    case "yes":
                        voted = true;
                        $('.circle').animate({
                            width: "350px",
                            height: "350px",
                            borderRadius:"100%"
                        }, 1000);
                        $('#questions').show("slow");
                        $('.pop').hide("slow");
                        $('#vote1').animate({
                            width: "80%"
                        }, 1000);
                        $('#vote2').animate({
                            width: "15%"
                        }, 1000);
                        $('#vote3').animate({
                            width: "5%"
                        }, 1000);
                        break;
                }
            });
        }
    });
});