import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORES } from '../../theme/tema';

interface PropsBarra {
  pasoActual: number;
  pasosTotales: number;
}

export default function BarraProgreso({ pasoActual, pasosTotales }: PropsBarra) {
  // Calculamos el porcentaje de llenado
  const porcentaje = Math.min((pasoActual / pasosTotales) * 100, 100);

  return (
    <View style={styles.fondoGris}>
      <View style={[styles.rellenoAzul, { width: `${porcentaje}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  fondoGris: {
    height: 8,
    backgroundColor: '#E2E8F0', // Un gris muy suave
    borderRadius: 4,
    width: '100%',
    overflow: 'hidden', // Evita que el azul se salga de los bordes curvos
  },
  rellenoAzul: {
    height: '100%',
    backgroundColor: COLORES.primario,
    borderRadius: 4,
  }
});