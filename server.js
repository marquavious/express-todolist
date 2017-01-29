

var express = require('express')
var handlebars = require('express-handlebars');
var app = express()

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    var todos = [
        {body:"take out laundry",completed: false},
        {body:"take out trash",completed: true},
    ]
    res.render('home', { todos: todos });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
