const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello from this is node api updated");
});

app.post('/api/products',async(req,res)=>{
    try{
const product=await Product.create(req.body);
res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
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