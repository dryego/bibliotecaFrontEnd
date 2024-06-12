import { useState, useEffect } from "react";
import { listarEmprestimo, devolverEmprestimo } from "../api/EmprestimoApi";
import { Alert } from "react-native";

interface Emprestimo {
  id: number;
  entregaRealizada: boolean;
  dataEntrega: string;
}

const useEmprestimos = () => {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmprestimos = async () => {
      try {
        const response = await listarEmprestimo();
        setEmprestimos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmprestimos();
  }, []);

  const handleDevolucao = async (id: number) => {
    try {
      const response = await devolverEmprestimo(id);
      if (response.status === 200) {
        Alert.alert("Sucesso", "Empréstimo devolvido com sucesso.");
        setEmprestimos((prevEmprestimos) =>
          prevEmprestimos.map((emprestimo) =>
            emprestimo.id === id
              ? { ...emprestimo, entregaRealizada: true }
              : emprestimo
          )
        );
      } else {
        Alert.alert("Erro", "Não foi possível devolver o empréstimo.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível devolver o empréstimo.");
    }
  };

  return {
    emprestimos,
    loading,
    handleDevolucao,
  };
};

export default useEmprestimos;
