const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = process.env.PORT || 3000
const mongodb="mongodb+srv://user:user@cluster0.ayogb.mongodb.net/messmanagement?retryWrites=true&w=majority"
const userSchema=require("./userSchema")
// https://mess-management038.herokuapp.com/
mongoose.connect(mongodb,()=>{
    console.log("database connected")
})

app.get('/', (req, res) => {
  res.json({
    msg:"Hello Bhai2"
  })
})

app.get("/user",async(req,res)=>{
    const user=await userSchema.find({})
    res.json(user)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})