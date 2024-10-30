const express = require("express");
const indexRoutes = require("./routes/index.routes");
const conn = require("./mysql-connection");

const app = express();

app.use(express.json());

app.use("/api", indexRoutes);

conn
  .raw("SELECT 1")
  .then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
  })
  .catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados: ${erro}`);
  });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}! 🚀`);
});
