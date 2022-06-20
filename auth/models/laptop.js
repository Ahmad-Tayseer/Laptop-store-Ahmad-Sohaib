'use strict';

const laptopModel = (sequelize, DataTypes) => sequelize.define('Laptop-Store', {
  type: { type: DataTypes.STRING, required: true },
  CPU: { type: DataTypes.STRING, required: true },
  RAM: { type: DataTypes.STRING, required: true },
  GPU: { type: DataTypes.STRING, required: true },
  HardDisk: { type: DataTypes.STRING, required: true }
});

module.exports = laptopModel;
