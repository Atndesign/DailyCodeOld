$(document).ready(function () {

    function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};


    console.log(randomColor());
    for (i = 0; i < 200; i++) {5
        
        let div = document.createElement('div');
        $(div).addClass("box");
        $("body").append(div);

    }
    $('div').mouseenter(function () {
        let backgroundColor = randomColor();

        $(this).css("background", backgroundColor);
        $(this).css("border", "2px solid white")
    })

    $('div').mouseleave(function () {

        $(this).css("border", "0px solid white")
    })
});