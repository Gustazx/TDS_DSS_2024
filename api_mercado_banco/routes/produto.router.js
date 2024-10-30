const routes = require("express").Router();
const produtoController = require("../controller/produto.controller");

<<<<<<< HEAD
// CRUD
routes.post("/", produtoController.cadastro);
routes.get("/", produtoController.consultar);
routes.get("/:id([0-9]+)", produtoController.buscaPorId);
routes.put("/", produtoController.atualizar);
routes.delete("/:id([0-9]+)", produtoController.deletar);
=======
//CRUD
routes.post("/", () => { });
routes.get("/", produtoController.consultar);
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", () => { });
>>>>>>> df348f633db27a34dbd0e1af45d66f9792275982

module.exports = routes;
