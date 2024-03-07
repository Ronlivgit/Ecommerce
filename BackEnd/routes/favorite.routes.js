const { Router } = require("express")
const router = Router()

const { addFavorite, deleteFavorite, getFavorite } = require('../controllers/favorites.controller'); // Corrected the require syntax and function names
const {Authentication} = require("../middleware/authentication")

router.get("/" ,getFavorite);

router.post("/",addFavorite);


router.delete("/:productId",Authentication, deleteFavorite);




module.exports = router