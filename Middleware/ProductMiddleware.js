const productModel = require("../Models/Product");

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
