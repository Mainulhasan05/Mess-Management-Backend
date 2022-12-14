const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    messName:{
        type:String,
        required:true
    },
    month:{
        type:mongoose.Types.ObjectId,
        ref:"month",
    },
    users:[{
        type:mongoose.Types.ObjectId,
        ref:"user",
        unique:true
    }],
},{timestamps:true})

const Student=new mongoose.model("mess",studentSchema);
module.exports= Student