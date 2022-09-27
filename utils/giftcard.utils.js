const { default: axios } = require("axios");
const { v4: uuidv4 } = require('uuid');
const { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE, BASE_URL } = require("../constants/config.const");

const buyGiftcard = async ({ senderName, recipientEmail, productId, unitPrice }) => {
    // Reloadly reference https://developers.reloadly.com/
    const credentials = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": GRANT_TYPE,
        "audience": `https://${BASE_URL}.reloadly.com`
    }

    const giftcardPayload = {
        productId,
        unitPrice,
        recipientEmail,
        senderName,
        "quantity": 1,
        "customIdentifier": uuidv4()
    }

    const authToken = await axios.post("https://auth.reloadly.com/oauth/token", credentials);

    const { access_token: jwtToken } = authToken.data;

    const giftcardObj = await axios.post(`https://${BASE_URL}.reloadly.com/orders`, giftcardPayload, {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    })

    return giftcardObj;
}

module.exports = buyGiftcard