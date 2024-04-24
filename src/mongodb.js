const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/loginSignup")
.then(()=>{
    console.log("mongo connected");
})
.catch((e)=>{
    console.log("failed to connect Mongo",e.message);
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LoginCollection=new mongoose.model("logincollection",LoginSchema)

module.exports=LoginCollection