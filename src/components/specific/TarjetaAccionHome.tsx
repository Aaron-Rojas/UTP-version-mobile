import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORES, ESPACIADO,SOMBRAS } from '../../theme/tema';

import { Ionicons } from '@expo/vector-icons';


// Interfaz estricta separando responsabilidades
interface PropsTarjetaAccion {
  // Props de Lógica
  onPress: () => void;
}

export default function TarjetaAccionHome({ onPress }: PropsTarjetaAccion) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.tarjeta} onPress={onPress}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Ir al Coliseo</Text>
        <Text style={styles.subtitulo}>Compara tus opciones frente a frente y descubre tu match ideal.</Text>
      </View>
      
      <View style={styles.cajaIcono}>
        <Ionicons name="rocket-outline" size={36} color={COLORES.primario} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: COLORES.primario,
    borderRadius: ESPACIADO.radio,
    padding: ESPACIADO.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...SOMBRAS.fuerte, // Aprovechamos las sombras que creamos
  },
  contenido: {
    flex: 1,
    paddingRight: ESPACIADO.md,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORES.textoBlanco,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  cajaIcono: {
    backgroundColor: COLORES.textoBlanco,
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});