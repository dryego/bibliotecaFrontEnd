import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { buscaEmprestimo } from "../api/EmprestimoApi";

const BuscaEmprestimoScreens = () => {
  const [id, setId] = useState("");
  const [emprestimo, setemprestimo] = useState<any>(null);

  const handleBusca = async () => {
    try {
      const response = await buscaEmprestimo(Number(id));
      setemprestimo(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o Emprestimo.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Emprestimo"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar Emprestimo" onPress={handleBusca} />
      {emprestimo && (
        <View style={styles.result}>
          <Text>ID: {emprestimo.id}</Text>
          <Text>ID Aluno: {emprestimo.idUsuario}</Text>
          <Text>ID Livro: {emprestimo.idLivro}</Text>
          <Text>Data Devolução: {emprestimo.dataDevolucao}</Text>
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

export default BuscaEmprestimoScreens;
