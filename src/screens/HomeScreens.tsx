import React from "react";
import { View, StyleSheet } from "react-native";
import ButaoCustomizado from "../components/ButaoCustomizado";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ButaoCustomizado
        title="Listar Usuários"
        onPress={() => navigation.navigate("Lista Usuarios")}
      />
      <ButaoCustomizado
        title="Buscar Usuàrio pelo ID"
        onPress={() => navigation.navigate("Busca Usuario")}
      />
      <ButaoCustomizado
        title="Cadastrar Usuário"
        onPress={() => navigation.navigate("Cadastro Usuario")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
