const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT, DATABASE_URL } = require("../constants/config.const");

module.exports = {
    development: {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOST,
        "dialect": "postgres"
    },
    production: {
        url: DATABASE_URL,
        dialect: 'postgres',
    },
};