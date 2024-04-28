const db = require('../config/db');
const { DataTypes } = require('sequelize');

const ListasCompra = db.define('ListasCompra', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ListasCompra;