const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const path = require("node:path")

app.use(cors())
app.use(morgan("dev"))
app.use(helmet())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const circularRoutes = require('./routes/circularRoutes')
const itemRoutes = require('./routes/itemRoutes')

app.use("/api/circulars", circularRoutes)
app.use("/api/items", itemRoutes)

app.get("/", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the Home page."},
        statusCode: 200
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})