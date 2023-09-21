import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import chartData from "./routes/chart.js"

const app=express();
dotenv.config();
app.use(express.json({limit:"30mb", extended:true}));

app.use(express.urlencoded({limit:"30mb", extended:true}));

app.use(cors());

app.get('/', (req, res)=>{
    res.send("This is a stackoverflow clone API");
})

app.use('/data', chartData);

const PORT=process.env.PORT || 5000;

const DATABASE_URL=process.env.CONNECTION_URL;
mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>{console.log(`Server is running at port ${PORT}`)}))
.catch((error)=>console.log(error.message));

//mdb pwd:luoRuvrsknShtsqe