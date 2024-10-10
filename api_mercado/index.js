const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes");

const app = express();

app.use(bodyParser.json());
routes.use("/", routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
