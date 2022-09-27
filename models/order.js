const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'productId', as: 'product' })
    }
  }
  Order.init({
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
    walletAddressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM,
      defaultValue: 'initiated',
      values: ['initiated', 'processing', 'paid', 'overpaid', 'underpaid', 'abadoned']
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
    cryptoInstantOrderResponse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    giftCardResponse: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Orders',
    modelName: 'Order',
  });
  Order.beforeCreate(order => order.id = uuidv4());
  return Order;
};