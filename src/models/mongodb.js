
require('dotenv').config()

var MongoClient = require('mongodb').MongoClient
function db(collection){

var mongo = new MongoClient(process.env.URL,{monitorCommands: true })

mongo.connect()
.then((db)=>{
  console.log('success connect to the mongodb')
  var dbo = db.db(collection)
  // get data from a collection
  // dbo.collection('data').find().toArray()
  // .then(data=>{
  //   data.map(e=>{
      
  //   })
  // })
  // .catch(err=>{
  //   console.log(err)
  // })

   // insert data into a collection
  // dbo.collection('person').insertOne({name:'vy'})

    //create collection
  // dbo.createCollection('animal')
  // .then(()=>{
  //     console.log('tao bang thang cong')
  // })
  // .catch(()=>{
  //     console.log('tao bang that bai')
  // })
})
.catch((err)=>{
  console.log(err)
})
}

module.exports = db;
