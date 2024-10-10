const routes = require("express").Router();
const clienteController = require("../controller/cliente.controller");

routes.post("/", clienteController.register);
routes.get("/", clienteController.find);
routes.put("/:id([0-9]+)", clienteController.update);
routes.delete(":/id([0-9])+", clienteController.delete);

module.exports = routes;
