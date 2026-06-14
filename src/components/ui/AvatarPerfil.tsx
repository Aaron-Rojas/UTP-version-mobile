import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORES } from '../../theme/tema';

interface PropsAvatar {
  urlImagen?: string;
  iniciales?: string;
  tamaño?: 'pequeño' | 'mediano' | 'grande';
}

export default function AvatarPerfil({ 
  urlImagen, 
  iniciales = 'U', 
  tamaño = 'pequeño' // Por defecto lo hacemos pequeño para la cabecera
}: PropsAvatar) {
  
  // Calculamos el tamaño en píxeles según la prop
  const getDimension = () => {
    if (tamaño === 'pequeño') return 36;
    if (tamaño === 'grande') return 80;
    return 56; // mediano
  };

  const dimension = getDimension();
  const radio = dimension / 2; // Para que sea un círculo perfecto

  return (
    <View style={[styles.contenedor, { width: dimension, height: dimension, borderRadius: radio }]}>
      {urlImagen ? (
        <Image 
          source={{ uri: urlImagen }} 
          style={{ width: dimension, height: dimension, borderRadius: radio }} 
        />
      ) : (
        // Si no hay foto, mostramos las iniciales (ej. "C" de Camila)
        <Text style={styles.texto}>{iniciales}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: COLORES.secundario, // Un azul claro de fondo
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: COLORES.textoBlanco,
    fontWeight: 'bold',
    fontSize: 16,
  }
});