const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

//var id = '5b0e783b3def42c833fba3cb'; //Todo
var id = '5b0e1da87a0f5b3c021d89fc'; //User

// if(!ObjectID.isValid(id)){
//     return console.log('Please enter a valid ID..');
// }

//Code for Todo's
// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todo',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todos)=>{
//     console.log('Todo Find 1',todos);
// })


// Todo.findById(id).then((todos) =>{
//     if(!todos){
//         return console.log('ID not found in Database');
//     }

//     console.log('Todo By ID',todos);
// }).catch((e) => console.log(e))


//Code For User's

User.findById(id).then((users) =>{
  if(!users){
      return console.log('User ID not found in Database');
   }    
   console.log(JSON.stringify(users, undefined, 2));
}).catch((e) => console.log(e))


