$(document).ready(function () {
    $(".box").click(function(){
        inputColor = $("input").val();
        $(this).css("background", inputColor)
    })
});