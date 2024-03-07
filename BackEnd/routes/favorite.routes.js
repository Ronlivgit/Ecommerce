const {Router} = require("express")
const router = Router()

const { addFavorite, deleteFavorit, getFavorite } = require('../controllers/favorites.controller'); // Corrected the require syntax and function names
// const {Authentication} = require("../middleware/authentication")



router.get("/" ,getFavorit);

router.post("/",addFavorit);


router.delete("/:productId", deleteFavorit);




module.exports = router