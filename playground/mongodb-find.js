const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //Using toArray collection
    // db.collection('Todos').find({_id: new ObjectID('5b0980a59db3a231ab272683')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    //Code used to get document count inside Todo's
    // db.collection('Todos').find().count().then((count)=>{
    //    console.log(`Todo's count: ${count}`)

    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    
    db.collection('Users').find({location:"Cebu"}).toArray().then((docs)=>{
        console.log('Users');               
        console.log(JSON.stringify(docs, undefined, 2));
    })

    
    db.close();

});