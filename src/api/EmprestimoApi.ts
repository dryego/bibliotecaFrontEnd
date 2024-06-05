import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/emprestimo",
});

export const buscaEmprestimo = async (id: number) => {
  const response = await api.get(`/busca/${id}`);
  return response;
};

export const listarEmprestimo = async () => {
  const response = await api.get("/listar");
  return response;
};

export const cadastroEmprestimo = async (emprestimo: {
  idUsuario: number,
  idLivro: number,
}) => {
  const response = await api.post("/cadastro", emprestimo);
  return response;
};

export const devolverEmprestimo = async (id: number) => {
  const response = await api.put(`/devolucao/${id}`);
  return response;
};
