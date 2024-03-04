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


app.use("/api/user" , userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/discount" , discountRouter)
app.use("/api/favorite" , favoriteRouter)
app.use("/api/order" , orderRouter)
app.use("/api/payment" , paymentRouter)
app.use("/api/product" , productRouter)


module.exports = { app }