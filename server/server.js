var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//This code is used to add 'Todo' records
// var Todo = mongoose.model('Todo',{
//     text: {
//       type: String,
//       required: true,
//       minlength: 1,
//       trim:true      
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo(
//     {
//         text: 'Washing the dishes-4      ',
//         completed: true,
//         completedAt: 2563
//     });
//------------------ End code for Todo records



//Code for adding User record
var Todo = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
        }
});

var newTodo = new Todo({
    email:"rolando1@gmail.com"    
});

 newTodo.save().then((doc) =>{
    console.log(JSON.stringify(doc, undefined,2));
 }, (e) =>{
     if(e){
         console.log('Unable to save ' + e);
     }
 });   
