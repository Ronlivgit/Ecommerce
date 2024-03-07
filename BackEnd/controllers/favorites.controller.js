const {Favorite} = require("../models/favorites.model")
// const {generateToken , verifyToken} = require("../utils/jwt")




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