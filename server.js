

var express = require('express')
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser')
var app = express()

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

var todos = [
    {body:"take out laundry",completed: false},
    {body:"take out trash",completed: true},
    {body:"eat",completed: false}

]
// TODOS INDEX
app.get('/', function (req, res) {
    res.render('home', { todos: todos });
});

// TODOS SHOW
app.get('/todos/:id',function(req,res){
    var todo = todos[req.params.id]
    res.render('todos-show', {todo:todo})
})

// TODOS CREATE
app.post('/todos',function(req, res) {
    console.log(req.body);
var todo = req.body
todos.push(todo)


    res.status(200).json(todo)
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
