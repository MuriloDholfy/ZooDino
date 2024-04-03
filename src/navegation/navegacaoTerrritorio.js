// No arquivo de navegação principal (por exemplo, App.js ou Navigator.js)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardsZoo from '../components/cardsZoo'; // Importe sua tela CardsZoo
import Territorio from '../components/Territorio'; // Importe sua tela Territorio

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardsZoo">
        <Stack.Screen name="CardsZoo" component={CardsZoo} options={{ headerShown: false }} />
        <Stack.Screen name="Territorio" component={Territorio} options={{ title: 'Territorio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
