const productos = require('../models/productos');
const db = require('../config/db');

const ProductosController = {};

ProductosController.getProductos = function (idListaCompra) {
    return productos.findAll({
        where: {
            ListasCompraId: idListaCompra
        }
    });
}

ProductosController.getProducto = function (id) {
    return productos.findByPk(id);
}

ProductosController.saveProducto = function (idListaCompra, data) {
    if (typeof data === 'undefined' || data === null) {
        return false;
    }

    const newListaCompra = productos.build({
        nombre: data.nombre,
        unidades: data.unidades,
        ListasCompraId: idListaCompra
    });

    return newListaCompra.save();
}

ProductosController.updateProducto = function (data) {
    if (typeof data === 'undefined' || data === null) {
        return false;
    }

    return productos.update({
        nombre: data.nombre,
        unidades: data.unidades
    }, {
        where: {
            id: data.id
        }
    });
}

ProductosController.deleteProducto = function (id) {
    return productos.destroy({
        where: {
            id: id
        }
    });
}

module.exports = ProductosController;