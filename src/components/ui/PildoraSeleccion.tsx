import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PropsPildora {
  texto: string;
  activo: boolean;
  onPress: () => void;
}

export default function PildoraSeleccion({ texto, activo, onPress }: PropsPildora) {
  return (
    <TouchableOpacity 
      style={[
        styles.baseContenedor, 
        activo ? styles.contenedorActivo : styles.contenedorInactivo
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.baseTexto, 
        activo ? styles.textoActivo : styles.textoInactivo
      ]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const COLORES = {
  primario: '#0D92F4',
  bordeGris: '#CBD5E1',
  textoGris: '#475569',
  blanco: '#FFFFFF'
};

const styles = StyleSheet.create({
  baseContenedor: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorActivo: {
    backgroundColor: COLORES.primario,
    borderColor: COLORES.primario,
  },
  contenedorInactivo: {
    backgroundColor: 'transparent',
    borderColor: COLORES.bordeGris,
  },
  baseTexto: {
    fontWeight: '600',
    fontSize: 14,
  },
  textoActivo: {
    color: COLORES.blanco,
  },
  textoInactivo: {
    color: COLORES.textoGris,
  }
});