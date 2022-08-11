const mongoose = require ("mongoose");

function connectDB(){

mongoose.connect('mongodb+srv://Soumeya:Soumeya1234@cluster1.r96tpw4.mongodb.net/Stage'

,{

    useUnifiedTopology: true,
    useNewUrlParser:true,})
     const connection = mongoose.connection

 connection.on('connected', ()=>{
      console.log('Mongo DB Connection Successfull')
     })


     connection.on('error', ()=>{
      console.log('Mongo DB Connection Error')
     })

}

connectDB()
module.exports = mongoose
