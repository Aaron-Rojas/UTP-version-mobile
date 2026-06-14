import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORES } from '../../theme/tema';

interface PropsContenedor {
  children: ReactNode;
}

export default function ContenedorSeguro({ children }: PropsContenedor) {
  return (
    <SafeAreaView style={styles.pantalla}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: COLORES.fondo,
  }
});