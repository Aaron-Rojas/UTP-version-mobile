// src/navigation/TabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'; // Íconos nativos de Expo
import { COLORES } from '../theme/tema';

// Importamos las 3 pantallas que acabamos de crear
import HomeScreen from '../screens/main/HomeScreen';
import CompareScreen from '../screens/main/CompareScreen';
import MatchScreen from '../screens/main/MatchScreen';
import ComparativaResultadoScreen from '../screens/main/ComparativaResultadoScreen';
import PlanScreen from '../screens/main/PlanScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Lógica para cambiar el ícono según la pestaña
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Explorar') iconName = focused ? 'compass' : 'compass-outline';
          else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';
          // return <Ionicons name={iconName} size={size} color={color} />;
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