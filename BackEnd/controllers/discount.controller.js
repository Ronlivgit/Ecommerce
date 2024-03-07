const {Discount} = require("../models/discount.model")
const { Product } = require("../models/product.model")
const {generateToken , verifyToken} = require("../utils/jwt")


const showDiscounts = async (req,res) =>{
    const query = req.query
    try {
        const getDiscounts = await Discount.find({...query})
        return res.status(200).send({message : "Discounts : " , getDiscounts})
    } catch (error) {
        return console.error(error);
    }
}


const createCode = async(req,res) =>{
    const body = req.body
    console.log(body);
    try {
        const newDiscount = new Discount(body)
        if(body.forProducts){
            body.forProducts.map(async(item) =>{
                // console.log("item" , {item});
                const currProduct = await Product.findById(item)
                const payload = 
                {
                    discountId : newDiscount._id,
                    startPrice : currProduct.price,
                    discount : newDiscount.discount,
                    finalPrice : (currProduct.price - newDiscount.discount)
                }
                currProduct.discounts.push(payload)
                currProduct.price = payload.finalPrice
                await currProduct.save()
            })
            await newDiscount.save()
        }
        return res.status(200).send({message : "Discount code created : " , newDiscount})
    } catch (error) {
        console.error(error);
    }
}

const disableDiscount = async(req,res) =>{
        const {discountId} = req.params
        console.log(discountId);
    try {
        const discount = await Discount.findById(discountId)
        discount.isValid = !discount.isValid
        await discount.save()
    } catch (error) {
        console.error(error);
    }
}


module.exports = {createCode , showDiscounts , disableDiscount}