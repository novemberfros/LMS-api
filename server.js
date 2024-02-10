import "dotenv/config"
import express from "express"

import { connectToMongoDb } from "./config/dbconfig.js";


const app = express ();
const PORT = process.env.PORT || 8000

import cors from 'cors'


//middleware
app.use(cors())
app.use(express.json())

//connnect to database
connectToMongoDb()

//start server
app.listen(PORT, (error)=>{
    error ? console.log("Error", error)
    : console.log("server is running")
})