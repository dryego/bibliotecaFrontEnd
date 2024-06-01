import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreens";
import UsuarioScreen from "./src/screens/UsuarioScreens";
import CadastroUsuario from "./src/components/UsuarioCadastro";
import BuscaUsuarioScreen from "./src/screens/BuscarUsuarioScreens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Lista Usuarios" component={UsuarioScreen} />
        <Stack.Screen name="Busca Usuario" component={BuscaUsuarioScreen} />
        <Stack.Screen name="Cadastro Usuario" component={CadastroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
