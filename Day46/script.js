
    let toLocal = () =>{
        let todo = document.querySelector('ul').innerHTML;
        localStorage.setItem('todos',todo);
    }
    let addItem = () =>{
        let inputValue = $('#taskInput').val();
        if (inputValue == "") {
            return
        } else {
            $("#output").append(`<li class="list-group-item"><i class="fas fa-check"></i> ${inputValue} <i class="fas fa-trash-alt"></i></li>`)
            $('#taskInput').val(null);
            toLocal();
        }
       
    }

    $("#taskSubmit").click(() => {
        addItem();
    })
    $("ul").click((ev)=>{
        if($(ev.target).hasClass("fa-trash-alt")){
            var div = ev.target.parentNode;
            div.remove();
            toLocal();
        }
        else if(ev.target.tagName == "LI"){
            ev.target.classList.toggle('checked');
        }
    })

    if(localStorage.getItem("todos")){
        document.querySelector('ul').innerHTML = localStorage.getItem('todos');
        
    }