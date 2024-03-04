const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Product} = require("../models/product.model")
const {addProduct, updateProduct, deleteProduct, getProducts, getProduct}= require("../controllers/product.controller");



router.get("/:productId" ,getProduct);

router.get("/" ,getProducts);

router.post("/" ,addProduct);


router.patch("/:productId" ,updateProduct);


router.delete("/:productId" ,deleteProduct);



module.exports = router