const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    messName:{
        type:String,
        
    }
},{timestamps:true})

const Student=new mongoose.model("test",studentSchema);
module.exports= Student