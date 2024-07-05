const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require("./models/productModel.js");
const path = require('path');
const multer = require('multer');

// Middleware
app.use(cors());
app.use(express.json());

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public', 'uploads')); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});


const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST route to create a product with file upload
app.post('/api/product', upload.single('image'), async (req, res) => {
    try {
        const productData = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            image: 'uploads/' + req.file.filename
                };

        const product = await Product.create(productData);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route to fetch a single product by ID
app.get('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE route to delete a product by ID
app.delete('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT route to update a product by ID
app.put('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            const updatedProduct = await Product.findById(req.params.id);
            res.status(200).json(updatedProduct);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// MongoDB connection
mongoose.connect('mongodb+srv://sudhielampa19:ytzey32hUINF4nGx@cluster0.d9zf5uk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
// Start server
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});