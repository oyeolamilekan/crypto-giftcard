const { sequelize, Product, Brand, Order, AcceptedCrypto } = require('../models')

const createBrand = async (req, res) => {
    const brand = await Brand.create(req.body)
    return res.status(201).json(brand)
}

const brands = async (req, res) => {
    const brands = await Brand.findAll()
    return res.status(201).json(brands)
}

module.exports = { createBrand, brands }