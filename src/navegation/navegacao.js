// Importações necessárias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Componentes de cada página
import Home from '../pages/home';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';

// Criação do Stack Navigator
const Stack = createStackNavigator();

// Componente principal de navegação
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial', headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
