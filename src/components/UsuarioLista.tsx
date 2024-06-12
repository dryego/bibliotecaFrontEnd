import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { listarUsuarios } from "../api/UsuarioApi";

const UsuarioLista = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await listarUsuarios();
        if (Array.isArray(response)) {
          setUsuarios(response);
        } else {
          console.error("Response não é uma array:", response);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally{
        setLoading(false)
      }
    };

    fetchUsuarios();
  }, []);

   if (loading) {
     return (
       <View style={styles.loadingContainer}>
         <ActivityIndicator size="large" color="#0000ff" />
       </View>
     );
   }

  const renderEmprestimos = (emprestimos: any[]) => {
    return emprestimos.map((emprestimo) => (
      <View key={emprestimo.id} style={styles.emprestimoItem}>
        <Text style={styles.emprestimoText}>
          Emprestimo ID: {emprestimo.id}
        </Text>
        <Text style={styles.emprestimoText}>
          Data Entrega: {emprestimo.dataEntrega}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.text}>ID: {item.id}</Text>
              <Text style={styles.text}>Nome: {item.nome}</Text>
              <Text style={styles.text}>CPF: {item.cpf}</Text>
              <Text style={styles.text}>Empréstimos:</Text>
              <ScrollView>
                {Array.isArray(item.emprestimosLivros) ? (
                  renderEmprestimos(item.emprestimosNaoEntregues)
                ) : (
                  <Text style={styles.noEmprestimosText}>
                    Nenhum empréstimo encontrado
                  </Text>
                )}
              </ScrollView>
            </View>
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
    backgroundColor: "#F5F5F5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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

export default UsuarioLista;
