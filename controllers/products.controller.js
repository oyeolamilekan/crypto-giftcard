const { Product } = require('../models')

const fetchProducts = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findAll({ where: { productId: id }, })
    return res.json(product)
}

const createProduct = async (req, res) => {
    const { title, amount, currency, productId, brandId } = req.body;
    const product = await Product.create({ title, amount, currency, productId, brandId })
    return res.status(201).json(product)
}

module.exports = { fetchProducts, createProduct }