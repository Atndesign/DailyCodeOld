function calculate() {
    var result;
    do {
        var input = prompt("Entrez un symbole: +,-,*,/,%");
    }
    while (input != "+" && input != "-" && input != "*" && input != "/" && input != "%")

    do {
        var nb1 = parseInt(prompt("Entrez un nombre"));
    }
    while (isNaN(nb1))

    do {
        var nb2 = parseInt(prompt("Entrez un 2eme nombre"));
    }
    while (isNaN(nb2));

    switch (input) {
        case "+":
            result = add(nb1, nb2);
            break;
        case "-":
            result = subtract(nb1, nb2);
            break;
        case "*":
            result = multiply(nb1, nb2);
            break;
        case "/":
            result = divide(nb1, nb2);
            break;
        case '%':
            result = modulo(nb1, nb2);
            break;
        case 'cos':
    }

    console.log("------------------");
    console.log("Result: " + result);
    console.log("------------------");
    var choice = prompt("Wanna do another calculation?: Yes, No").toLowerCase();
    switch (choice) {
        case "yes":
            calculate();
            break;
        case "no":
            break
    }
}

function calculateScience() {
    var result;
    do {
        var input = prompt("Entrez un symbole: cos,tan,sin,log,square,fac");
    }
    while (input != "cos" && input != "tan" && input != "sin" && input != "log" && input != "square" && input != "fac");

    do {
        var nb1 = parseInt(prompt("Entrez un nombre"));
    }
    while (isNaN(nb1));

    switch (input) {
        case "cos":
            result = cos(nb1);
            break;
        case "tan":
            result = tan(nb1);
            break;
        case "sin":
            result = sin(nb1);
            break;
        case "log":
            result = log(nb1);
            break;
        case 'square':
            result = square(nb1);
            break;
        case 'fac':
            result = fac(nb1);
            break;
    }
    return result;
}


// Functions
function add(nb1, nb2) {
    return nb1 + nb2;
}

function subtract(nb1, nb2) {
    return nb1 - nb2;
}

function multiply(nb1, nb2) {
    return nb1 * nb2;
}

function divide(nb1, nb2) {
    if (nb1 == 0 || nb2 == 0) {
        calculate();
    }
    return nb1 / nb2;
}

function modulo(nb1, nb2) {
    return nb1 % nb2;
}

// Science
function cos(nb1) {
    return Math.cos(nb1)
}

function tan(nb1) {
    return Math.tan(nb1)
}

function sin(nb1) {
    return Math.sin(nb1);
}

function log(nb1) {
    return Math.log(nb1);
}

function square(nb1) {
    return Math.sqrt(nb1);
}

function fac(nb1) {
    if (nb1 <= 1) {
        return 1;
    } else {
        return (nb1 * fac(nb1 - 1));
    }
}
// DOM

var display =  document.querySelector(".display");


var calc = document.querySelectorAll('button');

calc.forEach(element => {
    element.addEventListener("click", function (e) {
        if (e.target.id == "equal") {
            e.preventDefault();
        } else {
            e.preventDefault();
            document.querySelector(".display").innerHTML += e.target.innerHTML;
        }
    })

});

var buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click',(e) =>{
        switch(e.target.id){
            case "log":
            display.textContent = log(parseInt(display.textContent))
            break;
            case "tan":
            display.textContent = tan(parseInt(display.textContent))
            break;
            case "sin":
            display.textContent = sin(parseInt(display.textContent))
            break;
            case "cos":
            display.textContent = cos(parseInt(display.textContent))
            break;
        }
    });
    
});

var erase = document.getElementById('erase');
erase.addEventListener("click", function () {
    document.querySelector(".display").innerHTML = "";
})

var equal = document.getElementById('equal');
equal.addEventListener('click', function(){
    var input = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = eval(input);
});

