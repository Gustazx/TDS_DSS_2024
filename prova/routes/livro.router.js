const routes = require("express").Router();

const livroController = require("../controller/livro.controller");

routes.post("/", livroController.register);
routes.get("/", livroController.find);
routes.put("/:id([0-9]+)", livroController.update);
routes.delete("/:id([0-9])+", livroController.delete);

module.exports = routes;
