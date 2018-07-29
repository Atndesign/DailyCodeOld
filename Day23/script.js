$(document).ready(function () {

    let $mainMenuItems = $("#main-menu ul").children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,
//Initialize the function

        init = function () {
            bindEvents();

            if(validIndex(openedIndex)){
                animateItem($mainMenuItems.eq(openedIndex), true, 700);                
            };
            
        },
        bindEvents = function(){
            $mainMenuItems.children(".images").click(function () {
                let newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);

            });
            $('.button').hover(function(){
                $(this).addClass('hovered')
                
            },function(){
                $(this).removeClass('hovered')

            });

            $('.button').click(function(){
                let newIndex = $(this).index()
                checkAndAnimateItem(newIndex);
            })
        }
//Chekc if the index is valid or not

        validIndex = function (indexToCheck) {

            return (indexToCheck >= 0 && indexToCheck < totalMainMenuItems);
        }
//Animate and test if it need to be open or close
    animateItem = function ($item, toOpen, speed) {
        $colorImage = $item.find(".color");
        itemParam = toOpen ? {
                width: '420px'
            } : {
                width: "140px"
            },
            colorImageParam = toOpen ? {
                left: "0px"
            } : {
                left: "140px"
            };
        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam);
    };

    checkAndAnimateItem = function (indexToCheckAndAnimate){
        if (openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        } else {
            if (validIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex),false,250);
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
                
            }
        }
    }

    init()
});