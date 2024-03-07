const { Router } = require("express")
const router = Router()

const { addFavorite, deleteFavorite, getFavorite } = require('../controllers/favorites.controller'); // Corrected the require syntax and function names
const {Authentication} = require("../middleware/authentication")



<<<<<<< HEAD
router.get("/" ,getFavorite);

router.post("/",addFavorite);
=======
router.get("/",Authentication, getFavorite);

router.post("/",Authentication, addFavorite);
>>>>>>> ca54983e1db48716192934441b8a1122b46ff800


router.delete("/:productId",Authentication, deleteFavorite);




module.exports = router