require("dotenv").config()

const { sequelize } = require('./models')

const express = require("express");

const sync = require('./jobs/listener');

const app = express()

app.use(express.json())

app.use("/api/brand", require("./routes/brands.route"))

app.use("/api/crypto", require("./routes/crypto.route"))

app.use("/api/order", require("./routes/order.route"))

app.use("/api/products", require("./routes/products.route"))

app.use("/api/webhook", require("./routes/webhook.route"))

sync()

app.use('*', function (_, res) {
    res.status(404).json({ data: 'route not found' });
});

app.listen({ port: 5001 }, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})