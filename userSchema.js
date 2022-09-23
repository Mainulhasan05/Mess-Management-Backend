const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
    },
    role:{
        type:String
    },
    mess:{
        type:mongoose.Types.ObjectId,
        ref:"mess"
    },
    image:{
        type:String
    }
},{timestamps:true})

const Student=new mongoose.model("user",studentSchema);
module.exports= Student