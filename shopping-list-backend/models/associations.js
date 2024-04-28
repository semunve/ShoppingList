const ListasCompra = require('./listas-compra');
const Productos = require('./productos');
const db = require('../config/db');

ListasCompra.hasMany(Productos);
Productos.belongsTo(ListasCompra);

db.sync();