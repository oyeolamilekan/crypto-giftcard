const { Product, Brand, Order, AcceptedCrypto } = require('../models')
const quidax = require('../utils/crypto');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const createOrder = async (req, res) => {
    const { name, email, senderName, message, currency, productId } = req.body;
    const acceptedCrypto = await AcceptedCrypto.findOne({ where: { shortTitle: currency } })
    const productObj = await Product.findOne({
        where: { id: productId },
        include: { model: Brand, as: "brand" }
    })
    const generateWalletAddress = await quidax.wallets.createPaymentAddress("me", acceptedCrypto.shortTitle)
    await sleep(5000)
    const walletAddress = await quidax.wallets.fetchPaymentAddressById("me", acceptedCrypto.shortTitle, generateWalletAddress.data.id)
    const currentPriceTickerObj = await quidax.markets.fetchMarketTicker(
        acceptedCrypto.ticker
    )
    const currentPrice = Number(currentPriceTickerObj.data.ticker.low)
    const estimatedAmount = (Number(productObj.amount) + Number(productObj.brand.deliveryFee)) / currentPrice
    const order = await Order.create({
        name,
        email,
        senderName,
        message,
        productId,
        walletAddressId: generateWalletAddress.data.id,
        recieveAddress: walletAddress.data.address ?? "fkfkfkkf",
        expectedAmount: estimatedAmount,
        expectedCurrency: acceptedCrypto.shortTitle
    });
    return res.status(201).json(order)
}

const fetchOrders = async (req, res) => {
    const orderObj = await Order.findAll()
    return res.status(200).json(orderObj)
}

const fetchOrder = async (req, res) => {
    const { orderId } = req.params;
    const orderObj = await Order.findOne({ where: { id: orderId } })
    return res.status(200).json(orderObj)
}

module.exports = { createOrder, fetchOrders, fetchOrder }