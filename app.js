require("dotenv").config()

const { sequelize } = require('./models')

const express = require("express");

const sync = require('./jobs/listener');

const cors = require("cors");

const app = express()

app.use(cors());

app.use(express.json())

app.use("/api", require("./routes/brands.route"))

app.use("/api", require("./routes/crypto.route"))

app.use("/api", require("./routes/order.route"))

app.use("/api", require("./routes/products.route"))

app.use("/api", require("./routes/webhook.route"))

sync()

app.use('*', function (_, res) {
    res.status(404).json({ data: 'route not found' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
    // console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})