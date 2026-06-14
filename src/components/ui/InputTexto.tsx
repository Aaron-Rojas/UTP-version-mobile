import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsInput extends TextInputProps {
  label: string;
  esPassword?: boolean;
}

export default function InputTexto({ label, esPassword = false, ...props }: PropsInput) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        placeholderTextColor={COLORES.textoSecundario}
        secureTextEntry={esPassword} // Oculta el texto si es contraseña
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    marginBottom: ESPACIADO.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORES.textoPrincipal,
    marginBottom: ESPACIADO.sm,
  },
  input: {
    backgroundColor: COLORES.textoBlanco,
    borderWidth: 1,
    borderColor: COLORES.bordeGris,
    borderRadius: ESPACIADO.radio,
    paddingHorizontal: ESPACIADO.md,
    paddingVertical: 14, // Un poco más alto para que sea fácil de tocar
    fontSize: 16,
    color: COLORES.textoPrincipal,
  }
});