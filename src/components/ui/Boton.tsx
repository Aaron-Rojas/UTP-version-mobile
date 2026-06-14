import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORES, ESPACIADO } from "../../theme/tema";

// 1. El Contrato (Props Visuales)
export interface PropsBoton {
  texto: string;
  onPress: () => void;
  variante?: 'primario' | 'secundario' | 'invertido' | 'bordeado';
  deshabilitado?: boolean;
  nombreIcono: string;
}

export default function Boton({ 
  texto, 
  onPress, 
  variante = 'primario',
  deshabilitado = false 
}: PropsBoton) {

  // 2. Lógica para inyectar el estilo correcto según las props
  const obtenerEstiloContenedor = () => {
    if (deshabilitado) return styles.bgDeshabilitado;
    
    switch (variante) {
      case 'secundario': return styles.bgSecundario;
      case 'invertido': return styles.bgInvertido;
      case 'bordeado': return styles.bgBordeado;
      default: return styles.bgPrimario;
    }
  };

  const obtenerEstiloTexto = () => {
    if (deshabilitado) return styles.txtDeshabilitado;
    
    switch (variante) {
      case 'secundario': return styles.txtSecundario;
      case 'bordeado': return styles.txtBordeado;
      default: return styles.txtBlanco; // Primario e Invertido usan texto blanco
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.baseContenedor, obtenerEstiloContenedor()]} 
      onPress={onPress}
      disabled={deshabilitado}
      activeOpacity={0.8}
    >
      <Text style={[styles.baseTexto, obtenerEstiloTexto()]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

// 3. Los Estilos Estáticos (Optimizados por el motor nativo)
const styles = StyleSheet.create({
  baseContenedor: {
    paddingVertical: ESPACIADO.py,
    paddingHorizontal: ESPACIADO.px,
    borderRadius: ESPACIADO.radio,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  baseTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // -- Variantes de Fondo --
  bgPrimario: { backgroundColor: COLORES.primario },
  bgSecundario: { backgroundColor: COLORES.secundario },
  bgInvertido: { backgroundColor: COLORES.invertido },
  bgBordeado: { 
    backgroundColor: 'transparent', 
    borderWidth: 2, 
    borderColor: COLORES.primario 
  },
  bgDeshabilitado: { backgroundColor: COLORES.deshabilitadoFondo },
  
  // -- Variantes de Texto --
  txtBlanco: { color: COLORES.textoBlanco },
  txtSecundario: { color: COLORES.textoGrisOscuro },
  txtBordeado: { color: COLORES.primario },
  txtDeshabilitado: { color: COLORES.deshabilitadoTexto },
});