import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from './routes/product.router.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT
|| 7902 ;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products",productRouter)

// Postman test - frondent app'st

// console.log(process.env.MONGO_URI)

if(process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, "/frontend/dist")));
        app.get("*",(req,res)=> {
                res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
        });
}

app.listen(PORT, () =>{
        connectDB();
        console.log('server started at http://localhost:' + PORT);
});