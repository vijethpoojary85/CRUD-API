const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);




app.get('/',(req,res)=>{
    res.send("hello from this is node api updated");
});

app.get('/api/products',async(req,res)=>{
try{
    const product=await Product.find({});
    res.status(200).json(product);
}catch(error){
    res.status(500).json({message:error.message});
}
});

app.get('/api/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});
    }
    });



app.post('/api/products',async(req,res)=>{
    try{
const product=await Product.create(req.body);
res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

//update a product

app.put('/api/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
        return res.status(404).json({message:"product not found"});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);


    }catch(error){
        res.status(500).json({message:error.message});
    }
});

//delete a product

app.delete('/api/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
        return res.status(404).json({message:"product not found"});
        }
        
        res.status(200).json({message:"Product deleted successfully"});


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