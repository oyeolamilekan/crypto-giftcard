const { dispatchPendingDeposit, dispatchConfirmedDeposit, dispatchWalletAddress } = require('../jobs/deposit.job');

const processWebhook = async (req, res) => {
    const data = req.body;
    const { event } = data;
    switch (event) {
        case "wallet.address.generated":
            dispatchWalletAddress(data)
            break;
        case "deposit.transaction.confirmation":
            dispatchPendingDeposit(data)
            break;
        case "deposit.successful":
            dispatchConfirmedDeposit(data)
            break;
        default:
            break;
    }
    return res.status(200).json({})
}

module.exports = { processWebhook }