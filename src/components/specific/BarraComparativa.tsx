import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsBarraComparativa {
  label: string; // Ej: "Matemáticas" o "Programación"
  scoreA: number; // 0 a 100
  scoreB: number; // 0 a 100
  colorA?: string;
  colorB?: string;
}

export default function BarraComparativa({ 
  label, 
  scoreA, 
  scoreB, 
  colorA = COLORES.primario, 
  colorB = '#0F766E' // Verde oscuro para contrastar
}: PropsBarraComparativa) {
  
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>
      
      {/* Barra Carrera A */}
      <View style={styles.filaBarra}>
        <View style={styles.contenedorFondo}>
          <View style={[styles.relleno, { width: `${scoreA}%`, backgroundColor: colorA }]} />
        </View>
        <Text style={[styles.textoScore, { color: colorA }]}>{scoreA}</Text>
      </View>

      {/* Barra Carrera B */}
      <View style={styles.filaBarra}>
        <View style={styles.contenedorFondo}>
          <View style={[styles.relleno, { width: `${scoreB}%`, backgroundColor: colorB }]} />
        </View>
        <Text style={[styles.textoScore, { color: colorB }]}>{scoreB}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: ESPACIADO.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORES.textoPrincipal,
    marginBottom: 8,
    textTransform: 'capitalize', // Para que 'math' se vea 'Math' si no lo mapeamos antes
  },
  filaBarra: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },
  contenedorFondo: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  relleno: {
    height: '100%',
    borderRadius: 4,
  },
  textoScore: {
    width: 25, // Ancho fijo para que los números queden alineados
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});