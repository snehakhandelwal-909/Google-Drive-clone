const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minlength:[5,'username must be at least 5 characters long'],
    unique:true,
    trim:true}
  ,
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minlength:[13,'email must be at least 13 characters long'],
  },
  password:{
    type:String,
    required:true,
    minlength:[5,'password must be at least 5 characters long'],
    trim:true
  }})
  const User=mongoose.model('User',userSchema);
module.exports=User;