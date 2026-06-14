import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ESPACIADO } from '../../theme/tema';

interface PropsScroll {
  children: ReactNode;
}

export default function ContenedorScroll({ children }: PropsScroll) {
  return (
    <ScrollView 
      style={styles.scroll}
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: '100%',
  },
  contenido: {
    paddingHorizontal: ESPACIADO.lg,
    paddingBottom: ESPACIADO.xl * 2, // Espacio extra al final para que no choque con el menú inferior
    gap: ESPACIADO.md, // Separación automática entre todos los elementos
  }
});