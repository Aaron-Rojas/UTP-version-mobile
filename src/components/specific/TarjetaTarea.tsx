import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Tipamos estrictamente según el JSON Schema
interface PropsTarea {
  titulo: string;
  descripcion?: string;
  estado: 'pending' | 'done' | 'skipped';
  onPress: () => void;
}

export default function TarjetaTarea({ titulo, descripcion, estado, onPress }: PropsTarea) {
  const estaCompletada = estado === 'done';
  const estaOmitida = estado === 'skipped';

  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      onPress={onPress} 
      style={[
        styles.contenedor, 
        estaCompletada && styles.contenedorCompletado,
        estaOmitida && styles.contenedorOmitido
      ]}
    >
      {/* Círculo del Checkbox */}
      <View style={[
        styles.circuloCheck, 
        estaCompletada && styles.circuloCheckCompletado,
        estaOmitida && styles.circuloCheckOmitido
      ]}>
        {estaCompletada && <View style={styles.puntoBlanco} />}
        {estaOmitida && <Text style={styles.textoOmitido}>-</Text>}
      </View>

      {/* Textos */}
      <View style={styles.textos}>
        <Text style={[
          styles.titulo, 
          estaCompletada && styles.textoTachado,
          estaOmitida && styles.textoOpaco
        ]}>
          {titulo}
        </Text>
        {descripcion && (
          <Text style={[styles.descripcion, (estaCompletada || estaOmitida) && styles.textoOpaco]}>
            {descripcion}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORES.textoBlanco,
    padding: ESPACIADO.md,
    borderRadius: ESPACIADO.radio,
    marginBottom: ESPACIADO.sm,
    borderWidth: 1,
    borderColor: COLORES.borde,
  },
  contenedorCompletado: { backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' },
  contenedorOmitido: { backgroundColor: '#F1F5F9', opacity: 0.7 },
  
  circuloCheck: {
    width: 24, height: 24, borderRadius: 12,
    borderWidth: 2, borderColor: COLORES.borde,
    marginRight: 12, marginTop: 2,
    justifyContent: 'center', alignItems: 'center',
  },
  circuloCheckCompletado: { backgroundColor: COLORES.primario, borderColor: COLORES.primario },
  circuloCheckOmitido: { borderColor: COLORES.textoSecundario, backgroundColor: 'transparent' },
  puntoBlanco: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORES.textoBlanco },
  textoOmitido: { fontSize: 16, color: COLORES.textoSecundario, fontWeight: 'bold', marginTop: -2 },
  
  textos: { flex: 1 },
  titulo: { fontSize: 15, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: 4 },
  descripcion: { fontSize: 13, color: COLORES.textoSecundario, lineHeight: 18 },
  
  textoTachado: { textDecorationLine: 'line-through', color: COLORES.textoSecundario },
  textoOpaco: { color: '#94A3B8' },
});