const { AcceptedCrypto } = require('../models')

const acceptedCrypto = async (req, res) => {
    const accepted = await AcceptedCrypto.findAll()
    return res.json(accepted)
}

module.exports = { acceptedCrypto }