const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
},{timestamps:true})

const Student=new mongoose.model("user",studentSchema);
module.exports= Student