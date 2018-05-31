const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

//var id = '5b0e783b3def42c833fba3cb'; //Todo
// var id = '5b0e1da87a0f5b3c021d89fc'; //User

// if(!ObjectID.isValid(id)){
//    return console.log('Please enter a valid ID..');
// }

// //Delete All Todo Records
// Todo.remove({}).then((results) =>{
//   console.log(results);
// })

// //Delete many Todo Records
// Todo.deleteMany({text: 'Eat some snacks 1'}).then((results)=>{
//   console.log(results)
// })

// //Delete the first record that matches to criteria
// Todo.deleteOne({text: 'Eat some snacks 1'}).then((results)=>{
//   console.log(results);
// })

//Delete 1 record based on the id
Todo.findByIdAndRemove('5b0ebf5202af9b2eb850cf4f').then((results) =>{
  console.log(results)
})


