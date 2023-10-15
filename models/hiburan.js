'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hiburan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hiburan.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    publisher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hiburan',
  });
  return hiburan;
};