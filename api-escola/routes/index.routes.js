const routes = require("./aluno.router").Router();

routes.use("/alunos", alunoRouter);

module.exports = routes;
