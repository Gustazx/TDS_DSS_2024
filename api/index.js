import express from "express";
import bodyParser from "body-parser";

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post("/cliente", (req, res) => {
  res.send("");
});




