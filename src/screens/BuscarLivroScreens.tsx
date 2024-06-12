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
      setId("");
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
          <View style={styles.itemTextContainer}>
            <Text style={styles.text}>ID: {livro.id}</Text>
            <Text style={styles.text}>Titulo: {livro.titulo}</Text>
            <Text style={styles.text}>
              Ano da publicação: {livro.anoPublicacao}
            </Text>
            <Text style={styles.text}>
              Emprestimos: {livro.EmprestimosLivro}
            </Text>
          </View>
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
    backgroundColor: "#F5F5F5",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  buttonContainer: {
    marginLeft: 16,
  },
});

export default BuscaLivroScreens;
