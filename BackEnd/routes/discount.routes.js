const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Discount} = require("../models/discount.model")
const { createCode , disableDiscount , showDiscounts} = require("../controllers/discount.controller")
const { Authentication } = require("../middleware/authentication")
const { Authorize } = require("../middleware/autherization")



router.get('/get' , showDiscounts)

router.post('/create' , createCode)

router.patch('/update/:discountId' , Authentication , Authorize("admin") , disableDiscount )





module.exports = router