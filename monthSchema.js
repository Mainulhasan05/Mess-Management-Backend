const mongoose=require("mongoose");
const monthSchema=new mongoose.Schema({
    mess:{
        type:mongoose.Types.ObjectId,
        ref:"mess"
    },
    month:{
        type:String,
        required:true
    }
},{timestamps:true})

const Student=new mongoose.model("month",monthSchema);
module.exports= Student