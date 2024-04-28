var express = require('express');
var router = express.Router();
const ListasCompraController = require('../controllers/ListasCompraController');
const ProductosController = require('../controllers/ProductosController');

router.get('/listas-compra', function(req, res, next) {
    ListasCompraController.getListasCompra()
        .then((result) => {            
            res.send({
                success: true,
                data: result
            });
        })
        .catch((error) => {
            res.send({
                success: false,
                error: 'Se ha producido un error al intentar obtener las Listas de la Compra'
            });
        });
});

router.get('/listas-compra/:id', function (req, res, next) {
    ListasCompraController.getListaCompra(req.params.id)
        .then((result) => {
            if (result) {
                res.send({
                    success: true,
                    data: result.get({plain: true})
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se han encontrado resultados'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

router.post('/listas-compra', function (req, res, next) {
    ListasCompraController.saveListaCompra(req.body)
        .then((response) => {
            if (response) {
                ListasCompraController.getListasCompra()
                    .then((result) => {
                        res.send({
                            success: true,
                            data: result
                        });
                    })
                    .catch((error) => {
                        res.send({
                            success: false,
                            error: 'Se ha producido un error al intentar obtener las Listas de la Compra'
                        });
                    });
            } else {
                res.send({
                    success: false,
                    error: 'No se han podido crear la lista de la compra'
                });
            }            
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.meessage
            })
        });
});

router.put('/listas-compra/:id', function (req, res, next) {
    const data = req.body;
    data.id = req.params.id;
    ListasCompraController.updateListaCompra(data)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: data
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha encontrado la lista de la compra'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        })
});

router.delete('/listas-compra/:id', function (req, res, next) {
    ListasCompraController.deleteListaCompra(req.params.id)
        .then((response) => {
            if (response) {
                ListasCompraController.getListasCompra()
                    .then((result) => {
                        res.send({
                            success: true,
                            data: result
                        });
                    })
                    .catch((error) => {
                        res.send({
                            success: false,
                            error: 'Se ha producido un error al intentar obtener las Listas de la Compra'
                        });
                    });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha podido borrar la lista de la compra'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        })
});

router.get('/listas-compra/:id/productos', function (req, res, next) {
    ProductosController.getProductos(req.params.id)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: response
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha encontrado la lista de la compra'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

router.get('/productos/:idProducto', function (req, res, next) {
    ProductosController.getProducto(req.params.idProducto)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: response.get({ plain: true })
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha encontrado el producto'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
})

router.post('/listas-compra/:id/productos', function (req, res, next) {
    ProductosController.saveProducto(req.params.id, req.body)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: response.get({ plain: true })
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha podido añadir el producto'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

router.put('/productos/:idProducto', function (req, res, next) {
    const data = req.body;
    data.id = req.params.idProducto;

    ProductosController.updateProducto(data)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: data
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha encontrado el producto a actualizar'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

router.delete('/productos/:idProducto', function (req, res, next) {
    ProductosController.deleteProducto(req.params.idProducto)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: response
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha podido borrar el producto'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

module.exports = router;