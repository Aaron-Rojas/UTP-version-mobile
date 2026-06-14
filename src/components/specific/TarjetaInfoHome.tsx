import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TarjetaBase from '../ui/TarjetaBase'; 
import { COLORES, ESPACIADO } from '../../theme/tema';

import { Ionicons } from '@expo/vector-icons';

interface PropsTarjetaInfo {
  titulo: string;
  subtitulo: string;
  colorFondoIcono: string; 
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function TarjetaInfoHome({ titulo, subtitulo, colorFondoIcono, nombreIcono, onPress }: PropsTarjetaInfo) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.contenedorFlex} onPress={onPress}>
      <TarjetaBase>
        
        {/* Contenedor del ícono (El círculo de color) */}
        <View style={[styles.circuloIcono, { backgroundColor: colorFondoIcono }]}>
            {/* 🚀 CORRECCIÓN: Se inserta el componente consumiendo la propiedad nombreIcono */}
            <Ionicons name={nombreIcono} size={20} color={COLORES.textoBlanco} />
        </View>
        
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>

      </TarjetaBase>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedorFlex: {
    flex: 1, 
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