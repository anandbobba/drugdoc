const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:
    {
        type:String,
       
        minlength:3,
        maxlength:20,
        trim:true,
    },  
    email:String,
    password:String,

});

module.exports=mongoose.model('user',userSchema);    