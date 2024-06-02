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
            <Text>{item.id}</Text>
            <Text>{item.titulo}</Text>
            <Text>{item.anoPublicacao}</Text>
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

export default LivroLista;
