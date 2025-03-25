import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();

//call the function
const app = express();
//listen on a port and call the callback function once ready

const PORT = process.env.PORT || 5000;

//middleware to allow parse request of the body, ie, accept JSON data in the req.body
app.use(express.json()); //middelware is a function that runs b4 you send a response back to the client

app.use("/api/products",productRoutes)

app.listen(4000,() =>{
    connectDB();
    console.log("server started at http://localhost:"+PORT);
})
