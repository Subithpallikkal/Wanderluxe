const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/wanderluxe'

const connectDB = async () =>{
    try{
        await mongoose.connect(url)
        console.log('MongoDB connected')
    }catch(error){
        console.error('MongoDB connction error:',error);
        process.exit(1)
    }
}

module.exports = connectDB;