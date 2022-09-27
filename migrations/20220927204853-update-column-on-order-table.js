'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Orders', 'cryptoInstantOrderResponse', {
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('Orders', 'giftCardResponse', {
        type: Sequelize.TEXT,
      }),
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Orders', 'cryptoInstantOrderResponse'),
      queryInterface.removeColumn('Orders', 'giftCardResponse')
    ]);
  }
};
