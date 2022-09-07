const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = process.env.PORT || 3000
const mongodb="mongodb+srv://user:user@cluster0.ayogb.mongodb.net/messmanagement?retryWrites=true&w=majority"
const User=require("./userSchema")
// https://mess-management038.herokuapp.com/
mongoose.connect(mongodb,()=>{
    console.log("database connected")
})

app.get('/', (req, res) => {
  console.log('ohh bhaaii')
  res.json({
    msg:"Hello Bhai2"
  })
})

app.get("/user",async(req,res)=>{
    const user=await User.find({})
    res.json(user)
})
app.post("/adduser",async(req,res)=>{
  const newUser=new User(req.body)
  console.log(req.body)
  await newUser.save()
  res.json({"msg":"ok"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//git init 
// git add .
// git commit -m "msg"
// git push heroku master