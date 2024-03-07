const {Cart} = require("../models/cart.model")
const {generateToken , verifyToken} = require("../utils/jwt")
const {User} = require("./../models/user.model")

const getCart = async(req,res) =>{
    try {
        const params = req.params
        const userCart = await Cart.find({...params})
        return res.status(200).send({message : "Cart items : " , userCart})
    } catch (error) {
        console.error(error);
    }
}

const addToCart = async(req,res)=>{
    const params = req.params
    try {
        
    } catch (error) {
        console.error(error);
    }
}


module.exports = {}