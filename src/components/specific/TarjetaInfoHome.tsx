import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TarjetaBase from '../ui/TarjetaBase'; 
import { COLORES, ESPACIADO } from '../../theme/tema';

// Interfaz clara: Datos visuales vs Eventos lógicos
interface PropsTarjetaInfo {
  // Props Visuales
  titulo: string;
  subtitulo: string;
  colorFondoIcono: string; // ej: celeste para el plan, azul claro para el libro
  
  // Props de Lógica
  onPress: () => void;
}

export default function TarjetaInfoHome({ titulo, subtitulo, colorFondoIcono, onPress }: PropsTarjetaInfo) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.contenedorFlex} onPress={onPress}>
      <TarjetaBase>
        
        {/* Contenedor del ícono (El círculo de color) */}
        <View style={[styles.circuloIcono, { backgroundColor: colorFondoIcono }]}>
            {/* TODO: [RECORDATORIO EXPO] Insertar ícono de Expo aquí adentro */}
        </View>
        
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>

      </TarjetaBase>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedorFlex: {
    flex: 1, // Toma el 50% del ancho en una grilla flex-row
  },
  circuloIcono: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ESPACIADO.sm,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 12,
    color: COLORES.textoSecundario,
    lineHeight: 16,
  }
});