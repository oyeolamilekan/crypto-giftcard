const Bull = require("bull")
const { REDIS_URL } = require("../constants/config.const")


const dispatchPendingDeposit = async (data) => {
    const deposits = new Bull("deposit-pending-queue", REDIS_URL)
    await deposits.add(data)
}

const dispatchConfirmedDeposit = async (data) => {
    const deposits = new Bull("deposit-confirmed-queue", REDIS_URL)
    await deposits.add(data)
}

module.exports = { dispatchPendingDeposit, dispatchConfirmedDeposit }
