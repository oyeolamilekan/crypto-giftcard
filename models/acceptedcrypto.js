const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcceptedCrypto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  AcceptedCrypto.init({
    title: { type: DataTypes.STRING, allowNull: false, },
    shortTitle: { type: DataTypes.STRING, allowNull: false, },
    logo: { type: DataTypes.STRING, allowNull: false, },
    ticker: { type: DataTypes.STRING, allowNull: false, },
    isLive: { type: DataTypes.BOOLEAN, defaultValue: true, }
  }, {
    sequelize,
    tableName: 'AcceptedCryptos',
    modelName: 'AcceptedCrypto',
  });
  AcceptedCrypto.beforeCreate(acceptedCrypto => acceptedCrypto.id = uuidv4());
  return AcceptedCrypto;
};