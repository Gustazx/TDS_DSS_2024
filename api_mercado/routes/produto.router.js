const routes = require("express").Router();

const produtoController = require("../controller/produto.controller");

routes.post("/", produtoController.register);
routes.get("/", produtoController.find);
routes.put("/:id([0-9]+)", produtoController.update);
routes.delete(":/id([0-9])+", produtoController.delete);

module.exports = routes;
