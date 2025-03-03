import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from './routes/product.router.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT
|| 7902 ;
app.use(express.json());

app.use("/api/products",productRouter)

// Postman test - frondent app'st

// console.log(process.env.MONGO_URI)

app.listen(PORT, () =>{
        connectDB();
        console.log('server started at http://localhost:' + PORT);
});



//48:00 Get all-products
// Ctrl+D = select 1-2-3 0ver line tages changing .
//