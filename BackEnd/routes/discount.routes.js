const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Discount} = require("../models/discount.model")
const { createCode } = require("../controllers/discount.controller")


router.post('/create' , createCode)


module.exports = router