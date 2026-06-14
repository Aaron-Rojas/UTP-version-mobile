import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORES, ESPACIADO, SOMBRAS } from '../../theme/tema';

interface PropsTarjeta {
  children: ReactNode; // Esto permite meter cualquier cosa dentro de la tarjeta
  sinPadding?: boolean; // Opción por si quieres que una imagen llegue hasta el borde
  style?: ViewStyle; // Permite inyectar estilos extra desde afuera (ej: márgenes)
}

export default function TarjetaBase({ children, sinPadding = false, style }: PropsTarjeta) {
  return (
    <View style={[
      styles.contenedor, 
      sinPadding ? styles.sinPadding : styles.conPadding,
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: COLORES.textoBlanco,
    borderRadius: ESPACIADO.radio, // Aquí entra automáticamente el efecto Squircle (24)
    borderColor: COLORES.bordeGris,
    borderWidth: 1,
    width: '100%',
    
    // 🚀 La Magia: Reemplazamos tus 6 líneas de sombra harcodeada 
    // por la propagación de nuestro objeto centralizado.
    ...SOMBRAS.suave, 
  },
  conPadding: {
    padding: ESPACIADO.lg, 
  },
  sinPadding: {
    padding: 0,
  }
});