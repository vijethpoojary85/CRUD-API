const express = require('express')
const app = express()


app.listen(3000,() =>{
console.log("server is running");
});

app.get('/',(req,res)=>{
    res.send("hello from node api");
});