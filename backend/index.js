const express=require('express')
const app=express()
const cors=require('cors')
const  mongoose  = require('mongoose')
const Product=require("./models/productModel.js")

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Welcome to banckend');
})
app.post('/api/products',async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }

});
app.get('/api/products',async (req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products)
        }catch(error){
            res.status(500).json({message: error.message})
            }
});
app.get('/api/products/:id',async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.status(200).json(product)
            }else{
                res.status(404).json({message: 'Product not found'})
                }
                }catch(error){
                    res.status(500).json({message: error.message})
}});

app.delete('/api/products/:id',async (req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(product){
            res.status(200).json({message: 'Product deleted successfully'})
            }else{
                res.status(404).json({message: 'Product not found'})
                }
                }catch(error){
                    res.status(500).json({message: error.message})
                }
    });

app.put('/api/products/:id',async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body);
        if(!product){
            res.status(404).json({message: 'Product not found'})
        }else{
            const Updatedproduct =await Product.findById(id);
            res.status(200).json(Updatedproduct);
            
        }
    }
        catch(error){
            res.status(500).json({message: error.message})
        }
    
})

mongoose.connect('mongodb+srv://sudhielampa19:ytzey32hUINF4nGx@cluster0.d9zf5uk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(  () => {
    console.log('connected to database');
}).catch((error)=>{
    console.log(error);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})