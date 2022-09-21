const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = process.env.PORT || 3000
const mongodb="mongodb+srv://user:user@cluster0.ayogb.mongodb.net/messmanagement?retryWrites=true&w=majority"
const User=require("./userSchema")
const Mess=require("./messSchema")
const Month=require("./monthSchema");
const Test=require("./testSchema")
const Bazar=require("./bazarSchema")


app.use(express.json());

// https://messmanagement038.herokuapp.com/


mongoose.connect(mongodb,()=>{
    console.log("database connected")
})


// const obj3=new Test(new String("Rifat"))
// obj3.save(function(err,room) {
//   console.log(room.id);
//   // 632747849c56dd292d3318ff
// });

app.get('/', (req, res) => {
  console.log(req.body)
  res.json([{"4":5}]);
})
app.post('/adduser', async(req, res) => {
  const newUser=new User(req.body);
  await newUser.save();
  console.log(req.body)
  res.json({"msg":"Ok"});
})
app.get("/user",async(req,res)=>{
    const user=await User.find({})
    res.json(user)
})
app.post("/addmess",async(req,res)=>{
  const newMess=new Mess({
    messName:req.body.messName
  });
  messid=""
  monthid=""
  await newMess.save()
  .then((obj)=>{
      messid=obj._id
  })
  const newmonth=new Month({
    mess:messid,
    month:req.body.month
  })
  await newmonth.save().then((x)=>{
    
    monthid=x._id
    
  })
  console.log(messid,monthid)
  const updateUser=await User.findOneAndUpdate({email:req.body.email},{"mess":messid},{new:true});
  await Mess.updateOne(
    { _id: messid }, 
    { $push: { users: updateUser._id },month:monthid }   
);
res.json({
      msg:"Ok",
      "messid":messid,
      "monthid":monthid
    })


  })
 
app.post("/joinmess",async(req,res)=>{
  try{
    console.log(req.body.mess_id)
    const mess=await Mess.findOne({_id:mongoose.Types.ObjectId(req.body.mess_id)})
    if(mess){
      
     const updateUser=await User.findOneAndUpdate({email:req.body.email},{"mess":mess._id},{new:true});
     const mess=await Mess.updateOne(
      { _id: mess._id }, 
      { $push: { users: updateUser._id } })

      res.json({
        "msg":"ok",
        status:200,
        messid:mess._id
      })
    }
    else{
      console.log("no match")
      res.json({
        "msg":"no match",
        status:404
      })
    }
  }
  catch{
    res.json({
      "msg":"not ok",
      "status":500
    })
  }  
})

app.post("/addmember",async(req,res)=>{
  try {
    const updateUser=await User.findOneAndUpdate({email:req.body.memberemail},{"mess":req.body.messid},{new:true});
    console.log(updateUser)
    const mess=await Mess.updateOne(
      { _id: req.body.messid }, 
      { $push: { users: updateUser._id } }
  );
    res.json({"msg":"ok","status":200})
  } catch (error) {
    res.json({"status":500})
  }

})

app.post("/getuser",async(req,res)=>{
  const userdata=await User.findOne({email:req.body.email}).populate("mess")
  // console.log(userdata)
  res.json(userdata)
})

app.post("/getmembers",async(req,res)=>{
  const members=await Mess.findOne({_id:req.body.messid}).populate("users")
  res.json({"membersArray":members.users,"status":200})
})

app.post("/getcurrentMonth",async(req,res)=>{
  const mess=await Mess.findOne({_id:req.body.messid}).populate("month")
  res.status(200).json({month:mess.month.month,monthid:mess.month._id});
})

app.post("/addbazar",async(req,res)=>{
// const obj=new Bazar(req.body)
// await obj.save()
// console.log(req.body)
res.json({msg:"Bazar Item Added"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











//git init 
// git add .
// git commit -m "msg"
// git push heroku master