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
        setId("");
      } else {
        setUsuario(null);
        Alert.alert(
          "Usuário não localizado",
          "O usuário com o ID informado não foi encontrado."
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Usuário não encontrado.");
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
          <View style={styles.itemTextContainer}>
            <Text style={styles.text}>Nome: {usuario.nome}</Text>
            <Text style={styles.text}>CPF: {usuario.cpf}</Text>
            <Text style={styles.text}>Emprestimos:</Text>
            {Array.isArray(usuario.emprestimosLivros) &&
            usuario.emprestimosLivros.length > 0 ? (
              usuario.emprestimosNaoEntregues.map((emprestimo: any) => (
                <View key={emprestimo.id} style={styles.emprestimoItem}>
                  <Text style={styles.emprestimoText}>
                    Emprestimo ID: {emprestimo.id}
                  </Text>
                  <Text style={styles.emprestimoText}>
                    ID do Livro: {emprestimo.idLivro}
                  </Text>
                  <Text style={styles.emprestimoText}>
                    Data Entrega: {emprestimo.dataEntrega}
                  </Text>
                </View>
              ))
            ) : (
              <Text>Nenhum empréstimo encontrado</Text>
            )}
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
  emprestimoItem: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
  },
  emprestimoText: {
    fontSize: 14,
    color: "#555",
  },
  noEmprestimosText: {
    fontSize: 14,
    color: "#888",
  },
});

export default BuscaUsuarioScreen;
