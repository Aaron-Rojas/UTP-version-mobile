import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TarjetaBase from '../ui/TarjetaBase';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsTarjetaMatch {
  carrera: string;      // ej: "Ing. Sistemas"
  porcentaje: number;   // ej: 82
  descripcion: string;  // ej: "Tu perfil conecta con..."
  esTop1?: boolean;     // Para darle un color más fuerte a la primera opción
}

export default function TarjetaMatch({ carrera, porcentaje, descripcion, esTop1 = false }: PropsTarjetaMatch) {
  // Si es la mejor opción, usamos el color primario oscuro, si no, un celeste más claro
  const colorAnillo = esTop1 ? '#0F766E' : '#38BDF8'; // Verde azulado vs Celeste claro (Ajusta según tu paleta)

  return (
    <View style={styles.margenInferior}>
      <TarjetaBase>
        <View style={styles.filaContenedor}>
          
          {/* El Gráfico Circular Seguro (Fake Ring) */}
          <View style={[styles.anillo, { borderColor: colorAnillo }]}>
            <Text style={[styles.textoPorcentaje, { color: colorAnillo }]}>
              {porcentaje}%
            </Text>
          </View>

          {/* Textos de la Carrera */}
          <View style={styles.columnaTextos}>
            <Text style={styles.titulo}>{carrera}</Text>
            <Text style={styles.descripcion}>{descripcion}</Text>
          </View>

        </View>
      </TarjetaBase>
    </View>
  );
}

const styles = StyleSheet.create({
  margenInferior: {
    marginBottom: ESPACIADO.md,
  },
  filaContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  // La magia del anillo nativo
  anillo: {
    width: 64,
    height: 64,
    borderRadius: 32, // La mitad del width/height para hacerlo círculo perfecto
    borderWidth: 4,   // El grosor de la línea
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textoPorcentaje: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnaTextos: {
    flex: 1, // Toma todo el espacio restante a la derecha
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 13,
    color: COLORES.textoSecundario,
    lineHeight: 18,
  }
});