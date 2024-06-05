import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { listarUsuarios } from "../api/UsuarioApi";

const UsuarioLista = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await listarUsuarios();
        if (Array.isArray(response)) {
          console.log("Dados recebidos da API:", response);
          setUsuarios(response);
        } else {
          console.error("Response não é uma array:", response);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Emprestimos:</Text>
            {Array.isArray(item.emprestimosLivros) ? (
              item.emprestimosLivros.map((emprestimo: any) => (
                <View key={emprestimo.id} style={styles.emprestimoItem}>
                  <Text>Emprestimo ID: {emprestimo.id}</Text>
                  <Text>Livro ID: {emprestimo.livro.id}</Text>
                  <Text>Livro Título: {emprestimo.livro.titulo}</Text>
                  <Text>Livro Ano: {emprestimo.livro.anoPublicacao}</Text>
                </View>
              ))
            ) : (
              <Text>Nenhum empréstimo encontrado</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  emprestimoItem: {
    paddingLeft: 16,
    paddingTop: 8,
  },
});

export default UsuarioLista;
