const clienteController = require("../controller/cliente.controller");
const pedidoController = require("../controller/pedido.controller");
const produtoController = require("../controller/produto.controller");

const routes = require("express").Router();

routes.use("/cliente", clienteController);
routes.use("/pedido", pedidoController);
routes.use("/produto", produtoControllerr);

module.exports = {};
