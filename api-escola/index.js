const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyParser.json());
routes.use("/alunos", alunoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
