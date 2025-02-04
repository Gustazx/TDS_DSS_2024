const db = require("../db-conn");

exports.find = async (req, res) => {
  try {
    const livros = await db("LIVROS");
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

exports.register = async (req, res) => {
  try {
    const { titulo, id_autor, genero } = req.body;
    await db("LIVROS").insert({
      TITULO: titulo,
      ID_AUTOR: id_autor,
      GENERO: genero,
    });
    res.status(201).json({ message: "Livro cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar livro" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, id_autor, genero } = req.body;
    await db("LIVROS")
      .where({ ID: id })
      .update({ TITULO: titulo, ID_AUTOR: id_autor, GENERO: genero });
    res.json({ message: "Livro atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar livro" });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await db("LIVROS").where({ ID: id }).del();
    res.json({ message: "Livro deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar livro" });
  }
};
