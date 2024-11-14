import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Title from "./Title";

const Api = axios.create({
  baseURL: "http://localhost:8080/",
});

function App() {
  const [contador, setContador] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [alunos, setAlunos] = useState<{ nome: string }[]>([]);

  useEffect(() => {
    Api.get("aluno").then((response: { data: Array<{ nome: string }> }) => {
      console.log(response.data);
      setAlunos(response.data);
    });
  }, []);

  return (
    <>
      <Title />
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <h1>Cadastro</h1>
      <ol>
        {alunos?.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ol>
      {nome} - {email}
      <div>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Salvar</button>
      </div>
    </>
  );
}

export default App;
