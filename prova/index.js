const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes");
const conn = require("./db-conn");

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

conn
  .raw("SELECT 1")
  .then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
  })
  .catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados: ${erro}`);
  });

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
