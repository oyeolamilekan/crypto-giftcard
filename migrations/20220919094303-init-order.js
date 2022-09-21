'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      walletAddressId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senderName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM,
        defaultValue: 'initiated',
        values: ['initiated', 'processing', 'paid', 'abadoned']
      },
      expectedAmount: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 5),
      },
      convertedAmount: {
        type: DataTypes.DECIMAL(10, 5),
      },
      sendFee: {
        type: DataTypes.DECIMAL(10, 5),
      },
      isDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      discountAmount: {
        type: DataTypes.DECIMAL(10, 5),
      },
      expectedCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recieveAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
