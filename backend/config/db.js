const mongoose = require("mongoose")

const mongooseConnection = async () =>{
  try {
    const DATABASE_URL = process.env.DATABASE_URL
    await mongoose.connect(DATABASE_URL)
    console.log("Connected to the database")
  } catch (error) {
    console.error("Database Connection error")
    console.log(error.message)
    
  }
}

module.exports = {mongooseConnection}