
const express = require("express")
const cors = require("cors")

require("dotenv").config()
const {router} = require("./routes/mernRoutes")
const {mongooseConnection} = require("./config/db")

mongooseConnection()

const PORT = process.env.PORT || 5061

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/v1",router)
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`)
})
