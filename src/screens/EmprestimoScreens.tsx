import React from "react";
import { View, StyleSheet } from "react-native";
import Emprestimolista from "../components/EmprestimoLista";

const EmprestimoScreen = () => {
  return (
    <View style={styles.container}>
      <Emprestimolista />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EmprestimoScreen;
