const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    messName:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    users:[{
        type:mongoose.Types.ObjectId,
        ref:"user",
        unique:true
    }],
},{timestamps:true})

const Student=new mongoose.model("mess",studentSchema);
module.exports= Student