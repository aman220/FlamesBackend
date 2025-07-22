const e = require("express");
const productModel = require("../Models/Product");
const { default: mongoose } = require("mongoose");

exports.createproduct = async (req, res) => {
    const { ProductName, ProductDesc, ProductPrice, ProductLink } = req.body;
    console.log(ProductName, ProductDesc);

    try {
        const response = await productModel.create({
            ProductName,
            ProductDesc,
            ProductPrice,
            ProductLink
        });

        return res.status(201).json({ message: "created", response });
    } catch (error) {
        return res.status(501).json({ error: error.message });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.getProductbyID = async (req, res) => {
    const { id } = req.params;
    console.log("dsddsd", id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "ID kon paas karega bhai" })
    }
    try {

        const Product = await productModel.findById(id);
        if (!Product) {
            return res.status(404).json({ message: "bhai saahab product exist nhi krta" })
        }
        return res.status(200).json({ Product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.handleproductbyID = async (req, res) => {
    return res.status(400).json({ message: "bhai ID kon dega maen" })
}

exports.deleteproductbyid = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "ID kon paas karega bhai" })
    }
    try {
        const del = await productModel.findByIdAndDelete(id);
        if (!del) {
            return res.status(404).json({ message: "product hi nhi hai db maemn" })
        }
        return res.status(200).json({del});
    } catch (error) {
        return res.json(500).json({message :error.message})
    }
}
