import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookroute from "./route/book.route.js"
const app = express()
dotenv.config()
const PORT=process.env.PORT || 4000
const uri=process.env.MONGODBURL
//Connect to database
try{
    mongoose.connect(uri,{
        useNewURLParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected to Mongo")
}
catch{
    console.log("error")
}

//defining routes

app.use("/book",bookroute)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})  