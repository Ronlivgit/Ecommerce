const {Discount} = require("../models/discount.model")
const {generateToken , verifyToken} = require("../utils/jwt")



const createCode = async(req,res) =>{
    const body = req.body
    try {
        console.log(body);
    } catch (error) {
        console.error(error);
    }
}



module.exports = {createCode}