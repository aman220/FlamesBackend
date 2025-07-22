const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required:true,
        trim:true
    },
    ProductDesc:{
        type:String,
        required:true,
        trim:true
    },
    ProductPrice:{
        type:Number,
        required:true
    },
    ProductLink:{
        type:String, 
        required:true,
        trim:true
    }
})

const productModel = mongoose.model("Product" ,ProductSchema);

module.exports = productModel;



