import React from "react";
import { View, StyleSheet } from "react-native";
import Livrolista from "../components/LivroLista";

const LivroScreen = () => {
  return (
    <View style={styles.container}>
      <Livrolista />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LivroScreen;
