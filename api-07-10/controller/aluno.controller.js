let alunos = [];

module.exports({
  register: (req, res) => {
    const { id, nome, email } = req.body;

    console.log(req.body);
    alunos.push({
      id,
      nome,
      email,
    });

    res.send(req.body);
  },

  update: (req, res) => {
    const { id, nome, email } = req.body;

    alunos.filter((item) => {
      if (item.id === id) {
        item.nome = nome;
        item.email = email;
        return res.send("Aluno atualizado com sucesso");
      }
    });

    return res.status(400).send("Aluno não encontrado!");
  },

  delete: (req, res) => {
    const { id } = req.params;
    const index = alunos.findIndex((item) => item.id == id);

    if (index === -1) {
      return res.status(400).send("ID do aluno não existe");
    }

    alunos.splice(index, 1);

    return res.send(alunos);
  },

  getAll: (req, res) => {
    return res.status(200).send(alunos);
  },
});
