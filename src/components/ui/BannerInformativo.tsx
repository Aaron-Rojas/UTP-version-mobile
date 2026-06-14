import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsBanner {
  texto: string;
}

export default function BannerInformativo({ texto }: PropsBanner) {
  return (
    <View style={styles.contenedor}>
      {/* TODO: [RECORDATORIO EXPO] Aquí irá el ícono de "info-circle" */}
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#EFF6FF', // Un celeste muy suave (bg-blue-50)
    borderRadius: ESPACIADO.radio,
    padding: ESPACIADO.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBEAFE', // Borde un poco más oscuro
    marginBottom: ESPACIADO.lg,
  },
  texto: {
    flex: 1, // Para que el texto baje de línea si es muy largo
    fontSize: 13,
    color: COLORES.textoPrincipal,
    fontWeight: '500',
    lineHeight: 18,
  }
});