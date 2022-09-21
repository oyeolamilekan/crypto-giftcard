'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AcceptedCryptos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      shortTitle: {
        type: Sequelize.STRING
      },
      logo: { 
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      ticker: {
        type: Sequelize.STRING
      },
      isLive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AcceptedCryptos');
  }
};
