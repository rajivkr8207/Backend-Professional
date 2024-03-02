require('dotenv').config()
// const { DB_NAME } = require('./constant')
const express = require('express')
const connectDB  = require('./db');
const app = express()

connectDB();
/*
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log(`Error: `, error);
            throw error
        })
        app.listen(process.env.PORT, (req,res)=>{
            console.log(`server listen on port ${process.env.PORT}..`);
        })
    } catch (error) {
        console.error(`Error: `, error)
        throw error
    }
})()*/