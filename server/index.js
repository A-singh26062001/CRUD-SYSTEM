const express=require("express");
const app=express();
const mongoose=require("mongoose");
 

app.use(express.json())//to get the data from the front-end in the form of json format


mongoose.connect("",{
    useNewUrlParser:true,
} );
app.listen(3001,()=>{
    console.log("Server running on port 3001 ");
})