const Quidax = require("quidax-node");
const { QUIDAX_SECRET_KEY } = require("../constants/config.const");

const quidax = new Quidax(QUIDAX_SECRET_KEY);

module.exports = quidax