import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { listarLivros } from "../api/LivroApi";

const LivroLista = () => {
  const [livros, setLivro] = useState<any[]>([]);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await listarLivros();
        setLivro(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLivro();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemTextContainer}>
            <Text>ID: {item.id}</Text>
            <Text>Titulo: {item.titulo}</Text>
            <Text>Ano da Publicação: {item.anoPublicacao}</Text>
            </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTextContainer: {
    flex: 1,
  },
});

export default LivroLista;
