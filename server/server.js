
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

//Posting
app.post('/todos',(req, res) =>{
     var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });
});

//Getting
app.get('/todos', (req, res) =>{
    Todo.find().then((todos) =>{
        res.send({todos});
    },(err) =>{
        res.status(400).send(e);
    });
});


//Getting Todo's with param ID::
app.get('/todos/:id',(req, res) =>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){        
        return res.status(404).send()
    }

    Todo.findById(id).then((todos) =>{
        if(!todos){
            return res.status(404).send()
        }
        
        res.send({todos});
        
        
    }, (e) =>{
        res.status(400).send(e);
    })
})

 app.listen(3000, ()=>{
     console.log('Started on port 3000');
 });

 module.exports = {app};

