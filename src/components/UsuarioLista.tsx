import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { listarUsuarios } from "../api/UsuarioApi";

const UsuarioLista = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await listarUsuarios();
        setUsuarios(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.cpf}</Text>
          </View>
        )}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default UsuarioLista;
