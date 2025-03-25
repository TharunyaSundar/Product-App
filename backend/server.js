import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();

//call the function
const app = express();
//listen on a port and call the callback function once ready


const PORT = process.env.PORT || 4000;

const __dirname = path.resolve() 
//middleware to allow parse request of the body, ie, accept JSON data in the req.body
app.use(express.json()); //middelware is a function that runs b4 you send a response back to the client

app.use("/api/products",productRoutes)

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (res, req)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}


app.listen(4000,() =>{
    connectDB();
    console.log("server started at http://localhost:"+PORT);
})
