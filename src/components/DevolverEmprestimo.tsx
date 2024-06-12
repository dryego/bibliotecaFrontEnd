import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { devolverEmprestimo } from "../api/EmprestimoApi";

const DevolverEmprestimo = () => {
  const [id, setId] = useState("");
  
  const handleCadastro = async () => {
    const idNum = parseInt(id, 10);
    try {
      const response = await devolverEmprestimo(idNum);
      Alert.alert("Sucesso", response.data);
      setId("")
    } catch (error) {
      Alert.alert("Erro", "Erro ao devolver Emprestimo");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Empréstimo"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <Button title="Devolver" onPress={handleCadastro} />
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
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
});

export default DevolverEmprestimo;
