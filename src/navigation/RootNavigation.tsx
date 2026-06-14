import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistroScreen from '../screens/auth/RegistroScreen';
import TabNavigation from './TabNavigation';

import OnboardingScreen from '../screens/auth/OnboardingScreen';
import ComparativaResultadoScreen from '../screens/main/ComparativaResultadoScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  // Aquí luego pondremos un 'if' para saber si el usuario está logueado
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigation} />

      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Coliseo" component={ComparativaResultadoScreen}/>
      
    </Stack.Navigator>
  );
}