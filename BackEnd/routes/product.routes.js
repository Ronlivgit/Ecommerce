const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Product} = require("../models/product.model")
const {addProduct, updateProduct, deleteProduct, getProducts, getProduct,uploadProductImage,deleteProductImage}= require("../controllers/product.controller");
const {Authorize}=require('../middleware/autherization')
const {Authentication}=require('../middleware/authentication')
const upload = require("../middleware/multer");




router.get("/:productId" ,getProduct);

router.get("/" ,getProducts);

router.post("/" ,addProduct);


router.patch("/:productId" ,Authentication,Authorize("admin"),updateProduct);


router.delete("/:productId",Authentication, Authorize("admin"),deleteProduct);

// Upload Product Image
router.post("/image/:id", upload.single("productImage"),uploadProductImage );
  
  // Delete Product Image
router.delete("/image/:id",deleteProductImage );



module.exports = router