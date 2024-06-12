import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { buscaUsuario } from "../api/UsuarioApi";

const BuscaUsuarioScreen = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<any>(null);

  const handleBusca = async () => {
    try {
      const response = await buscaUsuario(Number(id));
      if (response) {
        setUsuario(response);
      } else {
        setUsuario(null);
        Alert.alert(
          "Usuário não localizado",
          "O usuário com o ID informado não foi encontrado."
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Usuário"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar Usuário" onPress={handleBusca} />
      {usuario && (
        <View style={styles.result}>
          <Text>Nome: {usuario.nome}</Text>
          <Text>CPF: {usuario.cpf}</Text>
          <Text>Emprestimos:</Text>
          {Array.isArray(usuario.emprestimosLivros) &&
          usuario.emprestimosLivros.length > 0 ? (
            usuario.emprestimosNaoEntregues.map((emprestimo: any) => (
              <View key={emprestimo.id} style={styles.emprestimoItem}>
                <Text>Emprestimo ID: {emprestimo.id}</Text>
                <Text>Data Entrega: {emprestimo.dataEntrega}</Text>
              </View>
            ))
          ) : (
            <Text>Nenhum empréstimo encontrado</Text>
          )}
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
  emprestimoItem: {
    paddingLeft: 16,
    paddingTop: 8,
  },
});

export default BuscaUsuarioScreen;
