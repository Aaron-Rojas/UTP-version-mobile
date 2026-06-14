// src/screens/main/HomeScreen.tsx  (Haz lo mismo para ExplorarScreen.tsx y PerfilScreen.tsx)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORES } from '../../theme/tema';

export default function HomeScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Pantallas Comparar carreras </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORES.fondo },
  texto: { fontSize: 24, fontWeight: 'bold', color: COLORES.primario }
});