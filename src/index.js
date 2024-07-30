import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";



connectDB()





/*
//    **************** first method od data base connection using mongoose  ****************
import express from "express";
const app= express()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
        // checks  when app() is connected or not...'error': Fired when an error occurs in the app or express ()
        app.on("error",(error)=>
        {
            console.log(error)
            throw error
        })

        app.listen(process.env.PORT,()=>console.log("server is runningon:", process.env.PORT))

    } catch (error) {
        console.log(error)
        throw error
    }
})()
    */