const quidax = require("./crypto.util")

const sellCrypto = async ({ ask, volume }) => {
    const quidaxObj = await quidax.instantOrder.createInstantOrder("me", {
        bid: "usdt",
        ask: ask,
        type: "sell",
        volume: volume,
        unit: ask,
    })

    const confirmInstantOrder = await quidax.instantOrder.confirmInstantOrder("me", quidaxObj.data.id)
    return confirmInstantOrder
}

module.exports = sellCrypto
