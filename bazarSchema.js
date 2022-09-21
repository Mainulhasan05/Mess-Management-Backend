const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    month:{
        type:mongoose.Types.ObjectId,
        ref:"month",
    },
    messid:{
        type:mongoose.Types.ObjectId,
        ref:"mess",
    }
},{timestamps:true})

const Student=new mongoose.model("bazar",studentSchema);
module.exports= Student