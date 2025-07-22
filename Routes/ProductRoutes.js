const express = require("express");
const ProductRoutes = express.Router();
const {createproduct, getAllProducts, getProductbyID, handleproductbyID, deleteproductbyid} = require("../Middleware/ProductMiddleware")

ProductRoutes.post('/createproduct' , createproduct );
ProductRoutes.get('/getallproducts' , getAllProducts );
ProductRoutes.get('/getproduct/:id' , getProductbyID);
ProductRoutes.get('/getproduct/' , handleproductbyID);
ProductRoutes.delete('/deleteproduct/:id', deleteproductbyid)

module.exports = ProductRoutes;