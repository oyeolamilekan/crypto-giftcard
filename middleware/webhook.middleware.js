const { WEBHOOKKEY } = require("../constants/config.const")

/**
 * Webhook middle protect the webhook route, from authenticated request.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const protectWebook = async (req, res, next) => {
    try {
        let webhookKey = req.headers['quidax-signature']

        if (webhookKey != WEBHOOKKEY) {
            res.status(500).json({
                message: "Not yet boss, no be me you go send back to my village."
            })
        }
        next()
    } catch (error) {
        res.status(401).json({
            message: "Not Unauthcorized"
        })
    }
}

module.exports = {
    protectWebook
}