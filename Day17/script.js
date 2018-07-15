console.log('ready')
const wallpapers = document.querySelectorAll('.background')
let item = 0;
item++;

setInterval(() => {
    if (item >= wallpapers.length) {
        item = 0;
    }
    wallpapers.forEach(wallpaper => {
        console.log('ahhdhhahah')
        wallpaper.className = "background";
            wallpapers[item].className = "background active";
    });
    item++;
}, 10000);