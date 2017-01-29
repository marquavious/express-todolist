console.log('IM ALIVE');

$(document).ready(function(){

    $('#new-todo').submit(function(e){
        e.preventDefault()

        var todo = $(this).serialize()

        $.post('/todos',todo, function (data){
            console.log(data)
            $('#todo-list').append("<li>" +data.body+"</li>")
            $('#new-todo')[0].reset()
        })
    })
})
