import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Interfaz estricta separando responsabilidades
interface PropsTarjetaAccion {
  // Props de Lógica
  onPress: () => void;
}

export default function TarjetaAccionHome({ onPress }: PropsTarjetaAccion) {
  return (
    <View style={styles.contenedorAzul}>
      
      <Text style={styles.titulo}>Empieza comparando dos carreras</Text>
      
      <Text style={styles.subtitulo}>
        Descubre qué camino se adapta mejor a tu perfil.
      </Text>

      {/* TODO: [RECORDATORIO EXPO] Ícono de flechas cruzadas (marca de agua) posicionado de forma absoluta a la derecha */}

      {/* Botón de acción interno */}
      <TouchableOpacity activeOpacity={0.8} style={styles.botonBlanco} onPress={onPress}>
        <Text style={styles.textoBoton}>Comparar carreras</Text>
        {/* TODO: [RECORDATORIO EXPO] Ícono de flecha pequeña "->" */}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedorAzul: {
    backgroundColor: COLORES.primario,
    borderRadius: ESPACIADO.radio,
    padding: ESPACIADO.lg,
    marginTop: ESPACIADO.md,
    marginBottom: ESPACIADO.md,
    overflow: 'hidden', 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORES.textoBlanco,
    marginBottom: 8,
    maxWidth: '85%',
  },
  subtitulo: {
    fontSize: 14,
    color: COLORES.textoBlanco,
    opacity: 0.9,
    marginBottom: ESPACIADO.xl,
    maxWidth: '80%',
  },
  botonBlanco: {
    backgroundColor: COLORES.textoBlanco,
    paddingVertical: 14,
    paddingHorizontal: ESPACIADO.md,
    borderRadius: ESPACIADO.radio,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  textoBoton: {
    color: COLORES.primario,
    fontSize: 16,
    fontWeight: 'bold',
  }
});