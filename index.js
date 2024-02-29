const express = require('express')
const mongoose = require('mongoose');
const app = express()




app.get('/',(req,res)=>{
    res.send("hello from this is node api updated");
});


mongoose.connect("mongodb+srv://admin225:3wMEbKEX3T68mnwy@backenddb.difes2w.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
console.log("Connected to the database!");
app.listen(3000,() =>{
    console.log("server is running");
    });
})
.catch(()=>{
   console.log("Connection failed!") 
});