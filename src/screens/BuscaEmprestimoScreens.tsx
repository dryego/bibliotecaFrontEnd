// import React, { useState } from "react";
// import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
// import { buscaEmprestimo, devolverEmprestimo } from "../api/EmprestimoApi";

// const BuscaEmprestimoScreens = () => {
//   const [id, setId] = useState("");
//   const [emprestimo, setEmprestimo] = useState<any>(null);

//   const handleBusca = async () => {
//     try {
//       const response = await buscaEmprestimo(Number(id));
//       if (response) {
//         setEmprestimo(response.data);
//       } else {
//         setEmprestimo(null);
//         Alert.alert(
//           "Emprestimo não localizado",
//           "O emprestimo com o ID informado não foi encontrado."
//         );
//       }
//     } catch (error) {
//       Alert.alert("Erro", "Não foi possível buscar o Emprestimo.");
//     }
//   };

//   const handleDevolucao = async () => {
//     try {
//       const response = await devolverEmprestimo(Number(id));
//       if (response.status === 200) {
//         Alert.alert("Sucesso", "Empréstimo devolvido com sucesso.");
//         setEmprestimo({ ...emprestimo, entregaRealizada: true });
//       } else {
//         Alert.alert("Erro", "Não foi possível devolver o Empréstimo.");
//       }
//     } catch (error) {
//       Alert.alert("Erro", "Não foi possível devolver o Empréstimo.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="ID do Emprestimo"
//         keyboardType="numeric"
//         value={id}
//         onChangeText={setId}
//       />
//       <Button title="Buscar Emprestimo" onPress={handleBusca} />
//       {emprestimo && (
//         <View style={styles.result}>
//           <View style={styles.resultTextContainer}>
//             <Text>ID: {emprestimo.id}</Text>
//             <Text>
//               Entrega Realizada: {emprestimo.entregaRealizada ? "Sim" : " Não"}
//             </Text>
//             <Text>Data Devolução: {emprestimo.dataEntrega}</Text>
//             {!emprestimo.entregaRealizada && (
//               <View style={styles.buttonContainer}>
//                 <Button title="Devolver Empréstimo" onPress={handleDevolucao} />
//               </View>
//             )}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   result: {
//     marginTop: 16,
//   },
//   resultTextContainer: {
//     flex: 1,
//   },
//   buttonContainer: {
//     color: "#AAA",
//     marginLeft: 16,
//   },
// });

// export default BuscaEmprestimoScreens;

import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { buscaEmprestimo } from "../api/EmprestimoApi";
import useEmprestimos from "../hooks/useEmprestimos";

const BuscaEmprestimoScreens = () => {
  const [id, setId] = useState("");
  const [emprestimo, setEmprestimo] = useState<any>(null);
  const { handleDevolucao } = useEmprestimos();

  const handleBusca = async () => {
    try {
      const response = await buscaEmprestimo(Number(id));
      if (response) {
        setEmprestimo(response.data);
      } else {
        setEmprestimo(null);
        Alert.alert(
          "Empréstimo não localizado",
          "O empréstimo com o ID informado não foi encontrado."
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o Empréstimo.");
    }
  };

  //   return (
  //     <View style={styles.container}>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="ID do Empréstimo"
  //         keyboardType="numeric"
  //         value={id}
  //         onChangeText={setId}
  //       />
  //       <Button title="Buscar Empréstimo" onPress={handleBusca} />
  //       {emprestimo && (
  //         <View style={styles.result}>
  //           <View style={styles.itemTextContainer}>
  //           <Text>ID: {emprestimo.id}</Text>
  //           <Text>
  //             Entrega Realizada: {emprestimo.entregaRealizada ? "Sim" : "Não"}
  //           </Text>
  //           <Text>Data Devolução: {emprestimo.dataEntrega}</Text>
  //           </View>
  //           {!emprestimo.entregaRealizada && (
  //             <Button
  //               title="Devolver"
  //               onPress={() => handleDevolucao(emprestimo.id)}
  //             />
  //           )}
  //         </View>
  //       )}
  //     </View>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     padding: 16,
  //   },
  //   input: {
  //     height: 40,
  //     borderColor: "gray",
  //     borderWidth: 1,
  //     marginBottom: 12,
  //     paddingHorizontal: 8,
  //   },
  //   result: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //     padding: 16,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#ccc",
  //     backgroundColor: "#f9f9f9",
  //     borderRadius: 8,
  //     marginBottom: 8,
  //   },
  //   itemTextContainer: {
  //     flex: 1,
  //   },
  //   buttonContainer: {
  //     marginLeft: 16,
  //   },
  // });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Empréstimo"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Buscar Empréstimo" onPress={handleBusca} />
      {emprestimo && (
        <View style={styles.result}>
          <View style={styles.itemTextContainer}>
            <Text style={styles.text}>ID: {emprestimo.id}</Text>
            <Text style={styles.text}>
              Entrega Realizada: {emprestimo.entregaRealizada ? "Sim" : "Não"}
            </Text>
            <Text style={styles.text}>
              Data Devolução: {emprestimo.dataEntrega}
            </Text>
          </View>
          {!emprestimo.entregaRealizada && (
            <View style={styles.buttonContainer}>
              <Button
                title="Devolver"
                onPress={() => handleDevolucao(emprestimo.id)}
                color="#841584"
              />
            </View>
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
  buttonContainer: {
    marginLeft: 16,
  },
});

export default BuscaEmprestimoScreens;

