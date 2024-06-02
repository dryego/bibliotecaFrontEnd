import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { cadastroLivro } from "../api/LivroApi";

const LivroCadastro = () => {
  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");

  const handleCadastro = async () => {
        const anoPublicacaoNum = parseInt(anoPublicacao, 10);
        const idNumero = parseInt(id,10)
        if (isNaN(anoPublicacaoNum)) {
          Alert.alert("Erro", "Ano de Publicação deve ser um número");
          return;
        }
    try {
      const response = await cadastroLivro({ id: idNumero, titulo, anoPublicacao: anoPublicacaoNum });
      Alert.alert("Sucesso", response.data);
    } catch (error) {
      Alert.alert("Erro", "Erro ao cadastrar Livro");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tirulo"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano Publicação"
        value={anoPublicacao}
        onChangeText={setAnoPublicacao}
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

export default LivroCadastro;
