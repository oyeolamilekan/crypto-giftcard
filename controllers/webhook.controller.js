const { dispatchPendingDeposit, dispatchConfirmedDeposit } = require('../jobs/deposit');

const processWebhook = async (req, res) => {
    const data = req.body;
    const { event } = data;
    switch (event) {
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