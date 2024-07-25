import express from "express";



const app = express();

const port = process.env.PORT || 8000

app.listen(port, () => console.log('Na porta ', port));

app.get('/', (req, res) =>{
    res.send("hello world")
})