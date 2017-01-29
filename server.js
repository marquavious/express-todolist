

var express = require('express')
var handlebars = require('express-handlebars');
var app = express()

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/todos', function (req, res){
    var todos = [
        {body:"take out laundry",completed: false},
        {body:"take out trash",completed: true},
    ]
    res.json(todos)
})

app.get('/', function (req, res) {
    res.render('home');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
