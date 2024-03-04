const {Product} = require("../models/product.model")
const {generateToken , verifyToken} = require("../utils/jwt")


const getProducts = async (req, res) => {
    try {
        const query = req.query
        const Products = await Product.find({ ...query });
        res.send(Products);

    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}

const getProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const Products = await Product.findById(productId).populate("questions");
        res.send(Products);

    } catch (error) {
        res.status(400).send(error);
    }
}


const addProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = new Product(body);
        console.log(newProduct);
        newProduct.productId = newProduct._id;
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
};


const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const body = req.body;
    try {
        let foundProduct = await Product.findById(productId);
        if (foundProduct) {
            foundProduct = await Product.findByIdAndUpdate(productId, body, { new: true });
            return res.send({ message: 'Product updated successfully', data: foundProduct });
        } else {
            return res.status(404).send('No Product found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
}


const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const isDeleted = await Product.findByIdAndDelete(productId);
        if (isDeleted) {
            return res.send({ message: 'Product deleted' });
        }
        return res.send({ message: 'Product Not found' });
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
}



module.exports = {addProduct, updateProduct, deleteProduct, getProducts, getProduct}