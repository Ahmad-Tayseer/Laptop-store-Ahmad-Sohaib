'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const laptopModel = require('./laptop.js');
const Collection = require('./data-collection.js');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const sequelizeOptions =
    process.env.NODE_ENV === 'production'
        ?
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        } : {};

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const laptop = laptopModel(sequelize, DataTypes);

module.exports = {
    sequelize, DataTypes,
    laptop: new Collection(laptop),
};
