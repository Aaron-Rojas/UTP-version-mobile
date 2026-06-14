import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsTarjeta {
  children: ReactNode; // Esto permite meter cualquier cosa dentro de la tarjeta
  sinPadding?: boolean; // Opción por si quieres que una imagen llegue hasta el borde
}

export default function TarjetaBase({ children, sinPadding = false }: PropsTarjeta) {
  return (
    <View style={[styles.contenedor, sinPadding ? styles.sinPadding : styles.conPadding]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: COLORES.textoBlanco,
    borderRadius: ESPACIADO.radio,
    borderColor: COLORES.bordeGris,
    borderWidth: 1,
    width: '100%',
    
    // Sombras sutiles nativas para iOS y Android
    shadowColor: COLORES.textoGrisOscuro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2, // Sombra en Android
  },
  conPadding: {
    padding: ESPACIADO.lg, // 24px de respiro interno
  },
  sinPadding: {
    padding: 0,
  }
});