const routes = require("express").Router();

const autorController = require("../controller/autor.controller");

routes.post("/", autorController.register);
routes.get("/", autorController.find);
routes.put("/:id([0-9]+)", autorController.update);
routes.delete("/:id([0-9]+)", autorController.delete);

module.exports = routes;
