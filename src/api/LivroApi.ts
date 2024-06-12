import axios from "axios";
import API_URL  from "../util/DefineURL";

const api = axios.create({
  baseURL: `${API_URL}/livro`,
});

export const buscaLivro = async (id: number) => {
  const response = await api.get(`/busca/${id}`);
  console.log(response.data);
  return response;
};

export const listarLivros = async () => {
  const response = await api.get("/listar");
  return response;
};

export const cadastroLivro = async (livro: {
  id: number;
  titulo: string;
  anoPublicacao: number;
}) => {
  const response = await api.post("/cadastro", livro);
  return response;
};
