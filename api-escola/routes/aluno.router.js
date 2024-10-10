const express = require("express");

const alunoController = require("../controller/aluno.controller");

const routes = express.Router();

routes.post("/register", alunoController.register);
routes.put("/update", alunoController.update);
routes.get("/find", alunoController.getAll);
routes.delete("/-alunos/:id[0-9]+", alunoController.delete);

module.exports = routes;
