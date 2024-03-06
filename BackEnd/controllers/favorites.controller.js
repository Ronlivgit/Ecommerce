const {Favorite} = require("../models/favorites.model")
// const {generateToken , verifyToken} = require("../utils/jwt")


//! GET favorites, POST favorites, UPDATE favorites , DELETE favorites
const getFavorit = async (req, res) => {
    try {
        const query = req.query
        const favorite = await Favorite.find({ ...query });
        return res.send(favorite);
    } catch (error) {
        console.log(error);
        return res.status(400).send("error");
    }
}

const addFavorit = async (req, res) => {
    try {
        const body = req.body;
        const newFavorite = new Favorite(body);
        console.log(newFavorite);
        newFavorite.productId = newFavorite._id;
        await newFavorite.save();
        return res.send(newFavorite);
    } catch (error) {
        console.log(error);
        return res.status(400).send("error");
    }
};


const deleteFavorit = async (req, res) => {
    const { productId } = req.params;
    console.log("Attempting to delete productId:", productId); 
    try {
        const isDeleted = await Favorite.findByIdAndDelete(productId);
        if (isDeleted) {
            console.log("Product deleted successfully", isDeleted); 
            return res.send({ message: 'Product deleted' });
        } else {
            console.log("Product not found", productId); 
            return res.status(401).send({ message: 'Product not found' });
        }
    } catch (error) {
        console.log("Error in deleting product", error);
        return res.status(400).send("Error");
    }
}





module.exports = {addFavorit,deleteFavorit,getFavorit}