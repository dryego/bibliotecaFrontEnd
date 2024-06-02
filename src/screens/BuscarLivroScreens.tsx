import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { buscaLivro } from "../api/LivroApi";

const BuscaLivroScreens = () => {
  const [id, setId] = useState("");
  const [livro, setlivro] = useState<any>(null);

  const handleBusca = async () => {
    try {
      const response = await buscaLivro(Number(id));
      setlivro(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o Livro");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Livro"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar Livro" onPress={handleBusca} />
      {livro && (
        <View style={styles.result}>
          <Text>ID: {livro.id}</Text>
          <Text>Titulo: {livro.titulo}</Text>
          <Text>Ano publicação: {livro.anoPublicacao}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
  },
});

export default BuscaLivroScreens;
