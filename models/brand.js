const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: 'brandId', as: 'brand' })
    }
  }
  Brand.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandProductId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryFee: {
      type: DataTypes.DECIMAL(10, 2)
    }
  }, {
    sequelize,
    tableName: 'Brands',
    modelName: 'Brand',
  });
  Brand.beforeCreate(brand => brand.id = uuidv4());
  return Brand;
};