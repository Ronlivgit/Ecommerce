const {Favorite} = require("../models/favorites.model")
// const {generateToken , verifyToken} = require("../utils/jwt")





// 
const getFavorite = async (req, res) => {
    try {
        const query = req.query
        console.log("query : ", {...query});
        const favorite = await Favorite.find({...query});
        console.log("favorite",favorite);
        res.send(favorite);

    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}




const addFavorite = async (req, res) => {
    try {
        const body = req.body;
        const user = req.user
        console.log("user : ", user);
        console.log("body : " , body);
        const newProduct =  Favorite(body);
        console.log("hybyvuyv"+newProduct);
        newProduct.favoriteId = newProduct._id;
        newProduct.userId = user.id
        console.log("newProduct :",newProduct);
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
};


const deleteFavorite = async (req, res) => {
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





module.exports = {addFavorite,deleteFavorite,getFavorite}
