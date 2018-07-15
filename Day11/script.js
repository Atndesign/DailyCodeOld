var research = "cat";

let imageeeeee = [];

var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${research}&api_key=aQincJRxlB7omcrHVXOStDTDv72utvwa&limit=50"`);

xhr.done((response) => { console.log("success got data", response); 

var jiffs = response.data;
for(i in jiffs)
{
    imageeeeee.push(jiffs[i].images.original.url)
}
});