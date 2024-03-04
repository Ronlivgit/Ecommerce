const express = require("express")
const cors = require("cors")
const app = express()


const userRouter = require("./routes/user.routes")
const cartRouter = require("./routes/cart.routes")
const discountRouter = require("./routes/discount.routes")
const favoriteRouter = require("./routes/favorite.routes")
const orderRouter = require("./routes/order.routes")
const paymentRouter = require("./routes/payment.routes")
const productRouter = require("./routes/product.routes")

app.use(express.json())
app.use(cors())


app.use("/user" , userRouter)
app.use("/cart" , cartRouter)
app.use("/discount" , discountRouter)
app.use("/favorite" , favoriteRouter)
app.use("/order" , orderRouter)
app.use("/payment" , paymentRouter)
app.use("/product" , productRouter)


module.exports = { app }