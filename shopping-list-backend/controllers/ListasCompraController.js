const listasCompra = require('../models/listas-compra');
const listaCompra = require('../models/productos');
const db = require('../config/db');

const listasCompraController = {};

listasCompraController.getListasCompra = function() {
    return listasCompra.findAll({
        include: listaCompra
    });
}

listasCompraController.getListaCompra = function(id) {
    return listasCompra.findOne({
        where: {
            id: Number.parseInt(id)
        }
    });
}

listasCompraController.saveListaCompra = function(data) {
    if (typeof data === 'undefined' || data === null) {
        return false;
    }

    const newListaCompra = listasCompra.build({
        nombre: data.nombre,
    });

    return newListaCompra.save();
}

listasCompraController.updateListaCompra = function (data) {
    if (typeof data === 'undefined' || data === null) {
        return false;
    }

    return listasCompra.update({
        nombre: data.nombre
    }, {
        where: {
            id: data.id
        }
    });
}

listasCompraController.deleteListaCompra = function (id) {
    return listasCompra.destroy({
        where: {
            id: id
        }
    });
}


module.exports = listasCompraController;
