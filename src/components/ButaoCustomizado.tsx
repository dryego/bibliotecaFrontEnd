// src/components/CustomButton.tsx

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

const ButaoCustomizado: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ButaoCustomizado;
