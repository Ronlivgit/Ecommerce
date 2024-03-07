const { Product } = require("../models/product.model")
const { generateToken, verifyToken } = require("../utils/jwt")
const { uploadToCloudinary, removeFromCloudinary } = require("../utils/cloudinary");






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
        console.log("hi");
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

const uploadProductImage = async (req, res) => {
    console.log("nmnbnbnm");
    try {
        //Upload Image to Cloudinary
        const data = await uploadToCloudinary(req.file.path, "product-images");
        console.log(data);
        //Save Image Url and publiId ti the database
        const savedImg = await Product.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    img: data.url,
                    publicId: data.public_id,
                },
            },
            { new: true }
        );

        res.status(200).send(savedImg);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteProductImage = async (req, res) => {
    try {
        //Find Product
        const product = await Product.findOne({ _id: req.params.id });
        //Find it's publicId
        const publicId = product.publicId;
        //Remove it from cloudinary
        await removeFromCloudinary(publicId);
        //Remove it from the Database
        const deleteImg = await Product.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    imageUrl: "",
                    publicId: "",
                },
            }
        );
        res.status(200).send("Product image deleted with success!");
    } catch (error) {
        res.status(400).send(error);
    }
}



module.exports = { addProduct, updateProduct, deleteProduct, getProducts, getProduct, deleteProductImage, uploadProductImage }