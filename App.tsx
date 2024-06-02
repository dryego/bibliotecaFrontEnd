import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreens";
import UsuarioScreen from "./src/screens/UsuarioScreens";
import CadastroUsuario from "./src/components/UsuarioCadastro";
import BuscaUsuarioScreen from "./src/screens/BuscarUsuarioScreens";
import LivroScreen from "./src/screens/LivroScreens";
import BuscaLivroScreens from "./src/screens/BuscarLivroScreens";
import LivroCadastro from "./src/components/LivroCadastro";
import EmprestimoScreen from "./src/screens/EmprestimoScreens";
import BuscaEmprestimoScreens from "./src/screens/BuscaEmprestimoScreens";
import EmprestimoCadastro from "./src/components/EmprestimoCadastro";
import DevolverEmprestimo from "./src/components/DevolverEmprestimo";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Listar Usuarios" component={UsuarioScreen} />
        <Stack.Screen name="Buscar Usuario" component={BuscaUsuarioScreen} />
        <Stack.Screen name="Cadastro Usuario" component={CadastroUsuario} />
        <Stack.Screen name="Listar Livros" component={LivroScreen} />
        <Stack.Screen name="Buscar Livro" component={BuscaLivroScreens} />
        <Stack.Screen name="Cadastro Livro" component={LivroCadastro} />
        <Stack.Screen name="Listar Emprestimos" component={EmprestimoScreen} />
        <Stack.Screen name="Buscar Emprestimo" component={BuscaEmprestimoScreens} />
        <Stack.Screen name="Cadastra Emprestimo" component={EmprestimoCadastro} />
        <Stack.Screen name="Devolver Emprestimo" component={DevolverEmprestimo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
