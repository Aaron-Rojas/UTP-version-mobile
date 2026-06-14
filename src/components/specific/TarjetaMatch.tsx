import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 🚀 IMPORTACIÓN DEL ÍCONO
import TarjetaBase from '../ui/TarjetaBase';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsTarjetaMatch {
  carrera: string;
  porcentaje: number;
  descripcion: string;
  esTop1?: boolean;
}

export default function TarjetaMatch({ carrera, porcentaje, descripcion, esTop1 = false }: PropsTarjetaMatch) {
  // Si es la mejor opción, usamos el color primario oscuro, si no, un celeste más claro
  const colorAnillo = esTop1 ? '#0F766E' : '#38BDF8'; 

  return (
    <View style={styles.margenInferior}>
      <TarjetaBase>
        <View style={styles.filaContenedor}>
          
          {/* El Gráfico Circular Seguro (Fake Ring) intacto */}
          <View style={[styles.anillo, { borderColor: colorAnillo }]}>
            <Text style={[styles.textoPorcentaje, { color: colorAnillo }]}>
              {porcentaje}%
            </Text>
          </View>

          {/* Textos de la Carrera */}
          <View style={styles.columnaTextos}>
            
            {/* 🚀 Envolvemos el título y el ícono en una fila */}
            <View style={styles.filaTitulo}>
              <Ionicons 
                name={esTop1 ? "trophy" : "star"} 
                size={18} 
                color={esTop1 ? "#F59E0B" : COLORES.textoSecundario} // Dorado para el Top 1, gris para el resto
                style={styles.icono}
              />
              <Text style={styles.titulo} numberOfLines={2}>{carrera}</Text>
            </View>
            
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
  },
  anillo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ESPACIADO.md,
  },
  textoPorcentaje: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnaTextos: {
    flex: 1, // Para que el texto no empuje el anillo fuera de la pantalla
  },
  filaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icono: {
    marginRight: 6,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    flexShrink: 1, // Evita que un título muy largo desborde la tarjeta
  },
  descripcion: {
    fontSize: 13,
    color: COLORES.textoSecundario,
    lineHeight: 18,
  }
});