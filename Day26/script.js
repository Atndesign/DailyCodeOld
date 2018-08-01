$(document).ready(function () {
            $('.wrapper').addClass('popUp'); {


                $("button[type='button']").click(function (e) {
                        if ($("input").val() == "") {
                            alert("You must enter something")
                        } else {
                            e.preventDefault;
                            $('.wrapper').removeClass('popUp');
                            $('.wrapper').animate({
                                height: "0"
                            });

                            setTimeout(function () {
                                $('.wrapper').html("<h1>Welcome</h1><br><p>Welcome to our tribe we are here please to have you here</p>")
                                $('.wrapper').animate({
                                    height: "780px"
                                });

                            }, 2000)
                        }
                        })
                    }
            });