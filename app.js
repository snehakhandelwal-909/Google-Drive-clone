const express=require('express');
const userRouter=require('./routes/user.routes');
const dotenv=require('dotenv');
dotenv.config();
const connectToDB=require('./config/db');
connectToDB();
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',userRouter);
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});