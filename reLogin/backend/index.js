const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
const AccessToken = "iamgirl"
const URL = "mongodb+srv://vanshikaxgarg:vanshikaxgarg@cluster0.ucojo.mongodb.net/ReLogin?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongodb connected")).catch((e)=>console.log(e));
const studentData = mongoose.Schema({
    username:String,
    userage:Number,
    password:String
})
const classData = mongoose.model("classData",studentData);
app.post("/signUp",async(req,res)=>{
    const {username,userage,password} = req.body;
    try{
        const hash = await bcrypt.hash(password,10);
        const newUser = new classData({username,userage,password:hash});
        await newUser.save();
        console.log(newUser);
        return res.status(200).json({message:"success"});
    }
    catch(error){
        console.log(error);
        return res.status(401).json({message:"failed"});
    }
}) 
app.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    const user = await classData.findOne({username});
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const dcrypt = await bcrypt.compare(password,user.password);
        if(!dcrypt){
            return res.status(400).json({message:"unauthourized user"});
        }
        const authentication = jwt.sign({username:user.username},AccessToken);
        if(authentication){
            console.log(authentication);
        }
    return res.status(200).json({
        message:"user found",
        token:authentication});
})
app.listen(PORT,()=>{
    console.log("server is running on 4000");
})