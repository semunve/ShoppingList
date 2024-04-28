const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'shopping-list.sqlite3'
});

// ListasCompra.hasMany(ListaCompra);
// ListaCompra.belongsTo(ListasCompra);

// db.sync();

module.exports = db;