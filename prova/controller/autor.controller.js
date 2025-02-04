const db = require("../db-conn");

exports.find = async (req, res) => {
  try {
    const autores = await db("AUTORES").select("*");
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar autores" });
  }
};

exports.register = async (req, res) => {
  try {
    const { nome, nacionalidade } = req.body;
    await db("AUTORES").insert({ NOME: nome, NACIONALIDADE: nacionalidade });
    res.status(201).json({ message: "Autor cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar autor" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, nacionalidade } = req.body;
    await db("AUTORES")
      .where({ ID: id })
      .update({ NOME: nome, NACIONALIDADE: nacionalidade });
    res.json({ message: "Autor atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar autor" });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await db("AUTORES").where({ ID: id }).del();
    res.json({ message: "Autor deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar autor" });
  }
};
