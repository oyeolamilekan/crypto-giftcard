const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } = require("./config.const");

module.exports = {
    development: {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOST,
        "dialect": DB_DIALECT
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
};