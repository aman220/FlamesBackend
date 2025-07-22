const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aman:1234@cluster0.wc0l0gv.mongodb.net/").then(()=>{
    console.log("my mongo is connected")
}).catch(()=>{
    console.log("connection falied")
})