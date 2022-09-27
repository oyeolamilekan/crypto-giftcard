'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Orders', // table name
        'cryptoInstantOrderResponse', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Orders',
        'giftCardResponse',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Orders', 'cryptoInstantOrderResponse'),
      queryInterface.removeColumn('Orders', 'giftCardResponse')
    ]);
  },
};
