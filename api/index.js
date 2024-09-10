const express = require("express");

const port = 3000;

const app = express();

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

app.get("/", (req, res) => {
  try {
    res.status(200).send("Show de bola");
  } catch (e) {
    res.status(500).send("erro", e);
  }
});
