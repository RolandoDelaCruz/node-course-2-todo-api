const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

   
    //Delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((results) =>{
    //     console.log(results)
    // });

    //Delete One
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((results)=>{
    //     console.log(results);
    // })

    //fineOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
        console.log(result);  
    })    

    //db.close();
    


});