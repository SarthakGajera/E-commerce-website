import express from "express";
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongoDb.config.js";
import connectCloudinary from "./config/cloudinary.config.js";

//App Config

const app=express();
const port=process.env.PORT || 4000
connectDb()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//API endpoints
app.get('/',(req,res)=>{
    res.send('API working')
})
app.listen(port,()=>{
    console.log('Server started on PORT:' + port)
})