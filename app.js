import express from "express";
import dotenv from "dotenv";
import axios from "axios";
// dotenv environment it is going to load all environment variable into process object
//load our environment variable into process.env
dotenv.config()

console.log(process.env);

const app = express()
const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=> {
    res.send("<h1>Hallo Render! server is running </h1>")
})

app.get("/weather", async (req,res) =>{
    //proxy server
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.SECRET_KEY}`)
    
    //sending response to our client
    res.send(response.data)
})

app.listen(PORT, ()=> console.log("server is running on port:", PORT))