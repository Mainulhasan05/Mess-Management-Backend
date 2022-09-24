const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    email:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    amount:{
        type:Number,
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