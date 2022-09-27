const Bull = require("bull")
const { REDIS_URL } = require("../constants/config.const")
const { Order, Product } = require('../models')
const buyGiftcard = require("../utils/giftcard.utils")

const pendingDepositQueueListener = async () => {
    const depositProcessingQueue = new Bull("deposit-pending-queue", REDIS_URL)
    depositProcessingQueue.process(async (jobs) => {
        const { data } = jobs.data;
        const orderObj = await Order.findOne({ where: { walletAddressId: data.payment_address.id } })
        if (orderObj.expectedAmount == data.amount) {
            orderObj.state = 'processing';
            orderObj.save()
        }
    })

    depositProcessingQueue.on("global:completed", (job, result) => {
        depositProcessingQueue.clean(0, "completed");
    })
}

const confirmedDepositQueueListener = async () => {
    const confirmedDepositQueue = new Bull("deposit-confirmed-queue", REDIS_URL)
    confirmedDepositQueue.process(async (jobs) => {
        try {
            const { data } = jobs.data;
            const orderObj = await Order.findOne({ where: { walletAddressId: data.payment_address.id }, include: { model: Product, as: "product" }, },)
            if (orderObj.expectedAmount >= data.amount) {
                orderObj.state = 'paid';
                orderObj.save()
                // const response = await buyGiftcard({ senderName: orderObj.name, recipientEmail: orderObj.email, productId: orderObj.product.productId, unitPrice: orderObj.product.amount })
                // convert crypto to instant order
                // console.log(response.data)

            }
        } catch (error) {
            console.log(error)
        }

    })

    confirmedDepositQueue.on("global:completed", (job, result) => {
        confirmedDepositQueue.clean(0, "completed");
    })
}

const sync = async () => {
    Promise.all([
        pendingDepositQueueListener(),
        confirmedDepositQueueListener()
    ])
}

module.exports = sync