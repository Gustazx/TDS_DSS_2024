const routes = require("express").Router();

const pedidoController = require("../controller/pedido.controller");

routes.post("/", pedidoController.register);
routes.get("/", pedidoController.find);
routes.put("/:id([0-9]+)", pedidoController.update);
routes.delete(":/id([0-9])+", pedidoController.delete);

module.exports = routes;
