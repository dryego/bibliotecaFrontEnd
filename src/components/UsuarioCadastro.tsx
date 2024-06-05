import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { cadastroUsuario } from "../api/UsuarioApi";

const UsuarioCadastro = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await cadastroUsuario({ nome, cpf });
      Alert.alert("Sucesso", response);
      setNome("");
      setCpf("");
    } catch (error: any) {
      if (error.response && error.response.data) {
        Alert.alert("Erro", error.response.data);
      } else {
        Alert.alert("Erro", "Erro ao cadastrar usuário");
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
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

export default UsuarioCadastro;
