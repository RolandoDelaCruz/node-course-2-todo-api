const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //Todo's Find and Update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b0bceaf3ac7a67e1d2d1ce1')
    //     },{
    //        $set:{
    //            completed: true,
    //            text: "Walking in the park"
    //        }     
    //     },{
    //         returnOriginal: false
    //     }).then((result) =>{
    //         console.log(result);
    //     });



    //User's Find and Update
    db.collection('Users').findOneAndUpdate({
         name:'Rolando'
        },{
            $set:{
                name:'Rolando Dela Cruz1'                
            },
            $inc:{
                age:1
            }
        },{
            returnOriginal: false
        }).then((results)=>{
            console.log(results);
        });

    //db.close();
    


});