import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Menu, Button, Provider as PaperProvider } from "react-native-paper";

const HomeScreen = ({ navigation }: any) => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [bookMenuVisible, setBookMenuVisible] = useState(false);
  const [loanMenuVisible, setLoanMenuVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Menu
          visible={userMenuVisible}
          onDismiss={() => setUserMenuVisible(false)}
          anchor={
            <Button onPress={() => setUserMenuVisible(true)}>Usuários</Button>
          }
        >
          <Menu.Item
            onPress={() => navigation.navigate("Listar Usuarios")}
            title="Listar Usuários"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Buscar Usuario")}
            title="Buscar Usuário pelo ID"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Cadastro Usuario")}
            title="Cadastrar Usuário"
          />
        </Menu>

        <Menu
          visible={bookMenuVisible}
          onDismiss={() => setBookMenuVisible(false)}
          anchor={
            <Button onPress={() => setBookMenuVisible(true)}>Livros</Button>
          }
        >
          <Menu.Item
            onPress={() => navigation.navigate("Listar Livros")}
            title="Listar Livros"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Buscar Livro")}
            title="Buscar Livros"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Cadastro Livro")}
            title="Cadastrar Livro"
          />
        </Menu>

        <Menu
          visible={loanMenuVisible}
          onDismiss={() => setLoanMenuVisible(false)}
          anchor={
            <Button onPress={() => setLoanMenuVisible(true)}>
              Empréstimos
            </Button>
          }
        >
          <Menu.Item
            onPress={() => navigation.navigate("Listar Emprestimos")}
            title="Listar Empréstimos"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Buscar Emprestimo")}
            title="Buscar Empréstimo"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Cadastra Emprestimo")}
            title="Cadastrar Empréstimo"
          />
          <Menu.Item
            onPress={() => navigation.navigate("Devolver Emprestimo")}
            title="Devolver Empréstimo"
          />
        </Menu>
      </View>
    </PaperProvider>
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
