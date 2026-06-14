// src/navigation/TabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; // Íconos nativos de Expo
import { COLORES } from '../theme/tema';

import { Ionicons } from '@expo/vector-icons';

// Importamos las 3 pantallas que acabamos de crear
import HomeScreen from '../screens/main/HomeScreen';
import CompareScreen from '../screens/main/CompareScreen';
import MatchScreen from '../screens/main/MatchScreen';
import PlanScreen from '../screens/main/PlanScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Lógica para cambiar el ícono según la pestaña
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle-outline'; // Ícono por defecto
          if (route.name === 'Home') {
        
        iconName = focused ? 'home' : 'home-outline';
        
      } else if (route.name === 'Match') {
        iconName = focused ? 'sparkles' : 'sparkles-outline'; // La brújula o estrellas para el Oráculo
      } else if (route.name === 'Comparar') {
        iconName = focused ? 'git-compare' : 'git-compare-outline';
      } else if (route.name === 'Plan') {
        iconName = focused ? 'map' : 'map-outline';
      }  
      return <Ionicons name={iconName} size={size} color={color} />;
      
        },
        tabBarActiveTintColor: COLORES.primario,
        tabBarInactiveTintColor: COLORES.textoSecundario,
        headerShown: false, // Oculta la barra superior fea
        tabBarStyle: {
          backgroundColor: COLORES.textoBlanco,
          borderTopColor: COLORES.bordeGris,
          elevation: 5, // Sombra en Android
        }
      })}
    >
      <Tab.Screen name='Inicio' component={HomeScreen} />
      <Tab.Screen name= 'Comparar' component={CompareScreen}/>
      <Tab.Screen name='Match' component={MatchScreen} />
      <Tab.Screen name='Plan' component={PlanScreen} />
      
    </Tab.Navigator>
  );
}