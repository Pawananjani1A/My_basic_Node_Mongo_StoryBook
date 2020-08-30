//jshint esversion:8 

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
           useNewUrlParser:true,
           useFindAndModify:false,
           useUnifiedTopology:true,
           useCreateIndex:true 
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    }catch (err){
         console.log(err);
         process.exit(1);
    }
};

module.exports = connectDB ;

