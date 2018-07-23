const p = document.querySelector('h1');
const author = document.querySelector('.author');

var endpoint = 'https://talaikis.com/api/quotes/random/';


$.ajax({
    url:endpoint,
    method:'GET',
})
.done(function (data){
    author.textContent = "‘ " +data.author + " ‘"
    p.textContent = data.quote;
})
.fail(function (err){
    console.log(err);
})