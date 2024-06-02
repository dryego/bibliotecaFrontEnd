import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { cadastroEmprestimo } from "../api/EmprestimoApi";

const EmprestimoCadastro = () => {
  const [idUsuario, setIdUsuario] = useState("");
  const [idLivro, setIdLivro] = useState("");

  const handleCadastro = async () => {
    const idUsuarioNum = parseInt(idUsuario, 10);
    const idLivroNum = parseInt(idLivro, 10);
    try {
      const response = await cadastroEmprestimo({
        idUsuario: idUsuarioNum,
        idLivro: idLivroNum,
      });
      Alert.alert("Sucesso", response.data);
    } catch (error) {
      Alert.alert("Erro", "Erro ao cadastrar Emprestimo");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID Usuário"
        value={idUsuario}
        onChangeText={setIdUsuario}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="ID Livro"
        value={idLivro}
        onChangeText={setIdLivro}
        keyboardType="numeric"
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default EmprestimoCadastro;
