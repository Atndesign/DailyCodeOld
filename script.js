var items = [
    {name: "Day1: sushiiiiiii",                    
    desc:"just a random test with css animation", 
    imgsrc:"Screenshot_22.png", 
    href: "Day1/index.html"},

    {name: "Day2: Traffic light",              
    desc: "just a random test with css animation", 
    imgsrc: "Screenshot_23.png", 
    href: "Day2/index.html"},
    {name: "Day3: Redesign and code of the website",
    desc: "I wanted to make this website responsive", 
    imgsrc: "Screenshot_27.png", 
    href: "#"}
,{
    name: "Day4: My first to do list ",
    desc: "this project took me a while cause it include localStorage",
    imgsrc: "Screenshot_32.png", 
    href: "Day4/index.html"},

{name: "Day5: Loto number generator",
desc: "This project was a bit harder than I thought",
imgsrc: "Screenshot_33.png", 
href: "Day5/index.html"},
{
    name: "Day6/7 Countdown to Decibel",
    desc: " I wanted to make a Countdown and it gave ma a bit of trouble",
    imgsrc: "Screenshot_34.png",
    href: "Day6/index.html"
},
{
    name: "Day6/7 Countdown to Decibel",
    desc: " I wanted to make a Countdown and it gave ma a bit of trouble",
    imgsrc: "Screenshot_34.png",
    href: "Day6/index.html"
}]

let link = document.getElementById('imgLink')
let title = document.getElementById('title')
let hrefLink = document.getElementById('hrefLink')
let articleContainer = document.getElementById('articleContainer');
let artcile = document.querySelectorAll('.artcile');

function adddddddddddd(){
    artcile.forEach(item => {
        var name = item.querySelector('P').textContent;
        var imgsrc = item.querySelector('img').getAttribute('src');
        var href = item.querySelector('a').getAttribute('href');
        items.push({name: name, imgsrc: imgsrc, href: href});
    });
}

function add() {
    for (step = 0; step < items.length; step++) {
        var article = document.createElement('DIV');
        article.className = "artcile";
        var red = document.createElement('DIV');
        red.className = "reddish";
        var img = document.createElement('IMG');
        img.setAttribute('src', items[step].imgsrc);
        var p = document.createElement('P');
        p.innerHTML = items[step].name + "<br>" + items[step].desc;
        var a = document.createElement("a");
        a.setAttribute('href', items[step].href);
        a.textContent = 'view more';
        
        article.appendChild(red);
        article.appendChild(img);
        article.appendChild(p);
        article.appendChild(a);
        articleContainer.appendChild(article);
    }
}