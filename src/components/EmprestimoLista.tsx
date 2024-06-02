import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { listarEmprestimo } from "../api/EmprestimoApi";

const UsuarioLista = () => {
  const [Emprestimos, setEmprestimo] = useState<any[]>([]);

  useEffect(() => {
    const fetchEmprestimo = async () => {
      try {
        const response = await listarEmprestimo();
        setEmprestimo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmprestimo();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={Emprestimos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.id}</Text>
            <Text>{item.idUsuario}</Text>
            <Text>{item.idLivro}</Text>
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
});

export default UsuarioLista;
