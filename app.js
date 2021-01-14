require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req, res)=>{
    res.send(`hello world ${process.env.MSG}`)
})

app.listen(port, ()=> {
    console.log(`Node server started on port : ${port}`)
})