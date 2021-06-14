import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home'
import GerarSenha from './src/pages/GerarSenha'
import SenhasSalvas from './src/pages/SenhasSalvas'


export default function PasswordGeneratorWithRealm() {

  const Stack = createStackNavigator();

 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="GerarSenha" component={GerarSenha} options={{ headerTransparent: true, headerTintColor: '#FFF', title: 'Gerar Senha' }} />
        <Stack.Screen name="SenhasSalvas" component={SenhasSalvas} options={{ title: 'Senhas Salvas', headerTransparent: true, headerTintColor: '#FFF', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}