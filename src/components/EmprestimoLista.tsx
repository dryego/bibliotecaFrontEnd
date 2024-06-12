import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import { listarEmprestimo, devolverEmprestimo } from "../api/EmprestimoApi";

// Defina a interface para o objeto Emprestimo
interface Emprestimo {
  id: number;
  entregaRealizada: boolean;
  dataEntrega: string;
}

const UsuarioLista = () => {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);

  useEffect(() => {
    const fetchEmprestimos = async () => {
      try {
        const response = await listarEmprestimo();
        setEmprestimos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmprestimos();
  }, []);

  const handleDevolucao = async (id: number) => {
    try {
      const response = await devolverEmprestimo(id);
      if (response.status === 200) {
        Alert.alert("Sucesso", "Empréstimo devolvido com sucesso.");
        setEmprestimos((prevEmprestimos) =>
          prevEmprestimos.map((emprestimo) =>
            emprestimo.id === id
              ? { ...emprestimo, entregaRealizada: true }
              : emprestimo
          )
        );
      } else {
        Alert.alert("Erro", "Não foi possível devolver o empréstimo.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível devolver o empréstimo.");
    }
  };

  const renderItem = ({ item }: { item: Emprestimo }) => (
    <View style={styles.item}>
      <View style={styles.itemTextContainer}>
        <Text>ID: {item.id}</Text>
        <Text>Entrega Realizada: {item.entregaRealizada ? "SIM" : "NÃO"}</Text>
        <Text>Data da Devolução: {item.dataEntrega}</Text>
      </View>
      {!item.entregaRealizada && (
        <View style={styles.buttonContainer}>
          <Button
            title="Devolver"
            onPress={() => handleDevolucao(item.id)}
            color="#841584"
          />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={emprestimos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTextContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginLeft: 16,
  },
});

export default UsuarioLista;
