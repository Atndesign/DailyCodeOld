//Global variable
const input = document.querySelector('input');
var list = document.getElementById('list');
const fish = document.getElementById('fish')
var deleteIcon = "X"
var li = document.querySelectorAll('li');


//Add to local function
function toLocal() {
    var todo = list.innerHTML;
    localStorage.setItem('todos', todo);
}

//Action to do when the user clicked on the fish
fish.addEventListener('click', function () {
    var userInput = getInput();
    if (userInput == null) {

    } else {
        CreateElmt(userInput)
    }
})

input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        var userInput = getInput();
        if (userInput == null) {

        } else {
            CreateElmt(userInput)
        }
    } else {

    };
});

//Get the user input
function getInput() {
    var userInput = input.value;
    if (userInput.length == 0) {
        alert('You must enter something')
    } else {
        input.value = "";
        return userInput;
    }
}

//function create a list item
function CreateElmt(input) {
    var li = document.createElement('li');
    li.textContent = input;
    0
    var span = document.createElement('span');
    span.textContent = deleteIcon;
    span.id = "delete";
    li.appendChild(span);
    list.appendChild(li);
    toLocal();
}

list.addEventListener('click', ev => {
    if (ev.target.tagName === "LI") {
        //Check item
        ev.target.classList.toggle('checked');
        toLocal();
    } else if (ev.target.tagName === "SPAN") {
        //Delete Item
        var div = ev.target.parentNode;
        div.remove();
        toLocal();

    }
})

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}