<<<<<<< HEAD
const conn = require("../mysql-connection");

module.exports = {
  cadastro: (req, res) => {
    const { nome, descricao, preco, quantidade_estoque } = req.body;

    const comando = `INSERT INTO PRODUTO(nome, descricao, preco, quantidade_estoque) 
            VALUES('${nome}', '${descricao}', '${preco}', '${quantidade_estoque}')`;

    conn
      .raw(comando)
      .then((data) => {
        res.status(200).send({ msg: "Produto cadastrado com sucesso!" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Erro ao cadastrar o produto!");
      });
  },
  consultar: (req, res) => {
    conn
      .raw("SELECT * FROM PRODUTO")
      .then((data) => {
        res.status(200).send(data[0]);
      })
      .catch((erro) => {
        console.log(erro);
        res.status(500).send("Erro ao consultar os produtos!");
      });
  },
  atualizar: (req, res) => {
    const { id, nome, descricao, preco, quantidade_estoque } = req.body;

    const comando = `UPDATE PRODUTO SET 
            nome='${nome}', 
            descricao='${descricao}', 
            preco='${preco}', 
            quantidade_estoque='${quantidade_estoque}' 
            WHERE id = ${id}`;

    conn
      .raw(comando)
      .then((data) => {
        console.log(data);
        res.status(200).send({ msg: "Produto atualizado com sucesso!" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ msg: "Erro ao atualizar o produto!" });
      });
  },
  deletar: (req, res) => {
    const { id } = req.params;

    conn
      .raw(`DELETE FROM PRODUTO WHERE id = ${id}`)
      .then((data) => {
        console.log(data[0].affectedRows);

        if (data[0].affectedRows == 0) {
          return res
            .status(404)
            .send({ msg: "Nenhum produto encontrado com esse código!" });
        } else {
          return res.status(200).send({ msg: "Produto deletado com sucesso!" });
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send({ msg: "Erro ao deletar o produto!" });
      });
  },
  buscaPorId: (req, res) => {
    const { id } = req.params;

    conn
      .raw(`SELECT * FROM PRODUTO WHERE id = ${id}`)
      .then((data) => {
        console.log(data);
        res.status(200).send(data[0]);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Erro ao consultar o produto!");
      });
  },
};
=======
const conn = require("../mysql-connection");

// CRUD
module.exports = {
    // cadastro: (req, res) => { },
    consultar: async (req, res) => {

        try {
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar os produtos!" });
        }
    },
    // atualizar: (req, res) => { },
    // deletar: (req, res) => { }
}
>>>>>>> df348f633db27a34dbd0e1af45d66f9792275982
