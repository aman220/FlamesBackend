const express = require("express");
const ProductRoutes = express.Router();
const {createproduct} = require("../Middleware/ProductMiddleware")

ProductRoutes.post('/createproduct' , createproduct )

module.exports = ProductRoutes;