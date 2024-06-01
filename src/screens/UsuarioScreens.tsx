import React from "react";
import { View, StyleSheet } from "react-native";
import UsuarioLista from "../components/UsuarioLista";

const UsuarioScreen = () => {
  return (
    <View style={styles.container}>
      <UsuarioLista />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UsuarioScreen;
