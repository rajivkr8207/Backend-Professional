const mongoose = require('mongoose');
const { DB_NAME } = require('../constant');


const connectDB = async ()=>{
    try {
         const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n Mongo DB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1)
    }
}

module.exports = connectDB;