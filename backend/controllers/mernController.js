const bcrypt = require("bcrypt")
const {UserModel} = require("../models/userSchema")


const sendResponse = async (res,statusCode,message,data = null) =>{
  return res.status(statusCode).json({
    message,
    data

  })
}


const mainRoute = async (req,res) =>{
  return sendResponse(res,200,"route is working")
}

const registerUser = async (req,res) =>{
  try {
    console.log(req.body)
    const {name,password,email} = req.body

    if(name === "" || password === "" || email === ""){
      return sendResponse(res,401,"Name,email, and password are required")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    console.log( `Salt: ${salt}`)
    console.log(`Hashed password: ${hashedPassword}`)

    // const newUserData = {
    //   name,
    //   email,
    //   password: hashedPassword
    // }
  
    const newUserData = {
      ...req.body,password: hashedPassword
    
    }
  
    const createdUser = new UserModel(newUserData)
    const savedUser = await createdUser.save()
    if(savedUser){
      console.log (savedUser)
      return sendResponse(res,201,"user created successfully",savedUser)
    }else{
      return sendResponse(res,500,"user creation error")
    }

  } catch (error) {
    return sendResponse(res,500,error.message)
  }
  


}

const getUsers = async (req,res) =>{
  try {
    const users = await UserModel.find().select("-password")
    if(users){
      return sendResponse(res,200,"Users retrieved successfuly",users)
    }else{
      return sendResponse(res,204,"users not found")
    }
    
  } catch (error) {
    console.log(error.message)
    return sendResponse(res,500,error.message)
    
  }
}
module.exports = {
  mainRoute,registerUser,getUsers
}