import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import { DB_Name } from "../constants.js";



async function connectDB()
{
    try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(connectionInstance)

        console.log("connected correctly")
    } catch (error) {
        console.log("MONGODB error line 11", error)
        throw error
    }
}
export default connectDB