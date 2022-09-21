'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const acceptedCrypto = [
      {
        id: uuidv4(),
        title: "Litecoin",
        shortTitle: "ltc",
        logo: "https://res.cloudinary.com/dbwm0ksoi/image/upload/v1652188377/crypto_ltc_c5874b092a_ilce2m.png",
        ticker: "ltcusdt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: "Bitcoin",
        shortTitle: "btc",
        logo: "https://res.cloudinary.com/dbwm0ksoi/image/upload/v1652188377/crypto_ltc_c5874b092a_ilce2m.png",
        ticker: "btcusdt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: "Dash",
        shortTitle: "dash",
        logo: "https://res.cloudinary.com/dbwm0ksoi/image/upload/v1652188407/crypto_dash_2da30f2e5e_mph3uv.png",
        ticker: "dashusdt",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return await queryInterface.bulkInsert('AcceptedCryptos',
      acceptedCrypto
      , {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
