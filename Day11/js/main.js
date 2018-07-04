let input = document.querySelector('input');
let submit = document.querySelector('button');
let quantity = document.querySelector('.quantity')
document.customForm.addEventListener('submit', (e) => {

  e.preventDefault();
  var research = input.value;
  var number = quantity.value;
  input.value ="";
  quantity.value ="";



  var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${research}&api_key=aQincJRxlB7omcrHVXOStDTDv72utvwa&limit=${number}"`);

  xhr.done((response) => {
    console.log("success got data", response);
    $(".inner").html("");

    var jiffs = response.data;
    for (i in jiffs) {
      $('.inner').append("<img src=" + jiffs[i].images.original.url + " style='height:350px;'/>")
    }
  });

})
