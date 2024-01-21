const express = require("express")
const router = express.Router()

//controllers
const {mainRoute,registerUser,getUsers} = require("../controllers/mernController")

/* 
path: GET http://localhost:5060/api/v1
about: 
*/

// get 
router.get("/",mainRoute)
router.get('/users',getUsers)

//posts
router.post("/user",registerUser)




module.exports = {router}