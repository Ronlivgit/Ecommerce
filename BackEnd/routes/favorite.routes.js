const { Router } = require("express")
const router = Router()

const { addFavorite, deleteFavorite, getFavorite } = require('../controllers/favorites.controller'); // Corrected the require syntax and function names
const {Authentication} = require("../middleware/authentication")



router.get("/",Authentication, getFavorite);

router.post("/",Authentication, addFavorite);


router.delete("/:productId",Authentication, deleteFavorite);




module.exports = router