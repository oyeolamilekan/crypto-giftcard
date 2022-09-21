const { Product } = require('../models')

const fetchAllProducts = async (req, res) => {
    const product = await Product.findAll()
    return res.json(product)
}

const createProduct =  async (req, res) => {
    const { title, amount, currency, productId, brandId } = req.body;
    const product = await Product.create({ title, amount, currency, productId, brandId })
    return res.status(201).json(product)
}

module.exports = { fetchAllProducts, createProduct }