const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const multer = require('./multer');
const path = require('path');

app.use('/images',express.static('assets/images'))

app.post("/upload",multer.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})


app.listen(4000,(error)=>{
    if(!error){
        console.log("Server Running in Port 4000");
    }
    else{
        console.log("Error : "+error);
    }
})