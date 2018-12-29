var showcase = document.getElementById('showcase');
var gallery = document.querySelectorAll(".thumbnail");

gallery.forEach(picture => {
    picture.addEventListener('click', function(){
        showcase.src = picture.src;
    })
});