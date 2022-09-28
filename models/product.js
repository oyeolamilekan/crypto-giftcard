'use strict';
const {
  Model
} = require('sequelize');

const { v4: uuidv4 } = require('uuid');
const convertToSlug = require('../utils/slugify');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Brand, Order }) {
      this.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' })
      this.hasMany(Order, { foreignKey: 'productId', as: 'order' })
    }
  }
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    tableName: 'Products',
    modelName: 'Product',
  });
  Product.beforeCreate(product => product.id = uuidv4());
  Product.beforeCreate(product => product.slug = `${convertToSlug(product.title)}-${product.id}`);
  return Product;
};