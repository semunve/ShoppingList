const db = require('../config/db');
const { DataTypes } = require('sequelize');

const Productos = db.define('Productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidades: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Productos;