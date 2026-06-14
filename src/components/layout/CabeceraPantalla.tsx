import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AvatarPerfil from '../ui/AvatarPerfil';
import { COLORES, ESPACIADO } from '../../theme/tema';

export default function CabeceraPantalla() {
  return (
    <View style={styles.contenedor}>
      
      {/* Lado Izquierdo: Logo y Título */}
      <View style={styles.logoContenedor}>
        {/* Nota: Aquí puedes poner tu logo SVG o PNG de Expo después */}
        <Text style={styles.titulo}>UTP Match</Text>
      </View>

      {/* Lado Derecho: Avatar */}
      <AvatarPerfil iniciales="C" tamaño="pequeño" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Empuja los elementos a los extremos
    alignItems: 'center',
    paddingVertical: ESPACIADO.md,
  },
  logoContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORES.primario,
  }
});