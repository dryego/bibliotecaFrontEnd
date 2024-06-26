import axios from "axios";
import API_URL  from "../util/DefineURL";

const api = axios.create({
  baseURL: `${API_URL}/usuario`,
});

export const buscaUsuario = async (id: number) => {
  const response = await api.get(`/busca/${id}`);
  console.log(response.data);
  return response.data;
};

export const listarUsuarios = async () => {
  const response = await api.get("/listar");
  return response.data;
};

export const cadastroUsuario = async (usuario: {
  nome: string;
  cpf: string;
}) => {
  const response = await api.post("/cadastro", usuario);
  return response.data;
};
