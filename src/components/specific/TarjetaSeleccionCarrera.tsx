import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TarjetaBase from '../ui/TarjetaBase';
import { COLORES, ESPACIADO } from '../../theme/tema';

interface PropsTarjetaSeleccion {
  nombre: string;
  descripcion: string;
  tags: string[];       // Ej: ['Lógica', 'Programación']
  intensidadPromedio: number; // 0 a 100
  seleccionada: boolean;
  onPress: () => void;
}

export default function TarjetaSeleccionCarrera({ 
  nombre, 
  descripcion, 
  tags, 
  intensidadPromedio, 
  seleccionada, 
  onPress 
}: PropsTarjetaSeleccion) {
  
  // Lógica para el texto y color de la intensidad
  let textoIntensidad = 'Baja';
  let colorIntensidad = COLORES.textoSecundario;
  
  if (intensidadPromedio >= 75) {
    textoIntensidad = 'Alta';
    colorIntensidad = COLORES.primario; // Azul
  } else if (intensidadPromedio >= 40) {
    textoIntensidad = 'Media';
    colorIntensidad = COLORES.terciario; // Verde/Celeste
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.margen}>
      {/* Si está seleccionada, le damos un borde azul a toda la tarjeta */}
      <View style={[styles.bordeSeleccion, seleccionada && styles.bordeActivo]}>
        <TarjetaBase>
          
          <View style={styles.cabecera}>
            {/* TODO: [RECORDATORIO EXPO] Ícono de la carrera en un cuadro gris/celeste */}
            <View style={styles.placeholderIcono} />
            
            <View style={styles.textosCabecera}>
              <Text style={styles.titulo}>{nombre}</Text>
              <Text style={styles.descripcion} numberOfLines={2}>{descripcion}</Text>
            </View>

            {/* Checkbox "Hechizo" (Nativo) */}
            <View style={[styles.circuloCheck, seleccionada && styles.circuloCheckActivo]}>
              {seleccionada && <View style={styles.puntoBlanco} />}
            </View>
          </View>

          {/* Fila de Tags */}
          <View style={styles.filaTags}>
            {tags.map((tag, index) => (
              <View key={index} style={styles.tagBase}>
                <Text style={styles.textoTag}>{tag}</Text>
              </View>
            ))}
            {seleccionada && (
              <View style={styles.tagSeleccionado}>
                {/* TODO: [RECORDATORIO EXPO] Ícono de check pequeño */}
                <Text style={styles.textoTagSeleccionado}>Seleccionada</Text>
              </View>
            )}
          </View>

          {/* Barra de Intensidad */}
          <View style={styles.contenedorIntensidad}>
            <View style={styles.textosIntensidad}>
              <Text style={styles.labelIntensidad}>Intensidad Visual</Text>
              <Text style={[styles.valorIntensidad, { color: colorIntensidad }]}>{textoIntensidad}</Text>
            </View>
            <View style={styles.fondoBarra}>
              <View style={[styles.rellenoBarra, { width: `${intensidadPromedio}%`, backgroundColor: colorIntensidad }]} />
            </View>
          </View>

        </TarjetaBase>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  margen: { marginBottom: ESPACIADO.md },
  bordeSeleccion: {
    borderRadius: ESPACIADO.radio,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  bordeActivo: { borderColor: COLORES.primario },
  
  cabecera: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  placeholderIcono: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#E2E8F0' },
  textosCabecera: { flex: 1 },
  titulo: { fontSize: 16, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: 4 },
  descripcion: { fontSize: 13, color: COLORES.textoSecundario, lineHeight: 18 },
  
  circuloCheck: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: COLORES.borde, justifyContent: 'center', alignItems: 'center' },
  circuloCheckActivo: { backgroundColor: COLORES.primario, borderColor: COLORES.primario },
  puntoBlanco: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORES.textoBlanco },
  
  filaTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: ESPACIADO.md, marginBottom: ESPACIADO.md },
  tagBase: { backgroundColor: '#E2E8F0', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12 },
  textoTag: { fontSize: 12, color: COLORES.textoSecundario, fontWeight: '600' },
  tagSeleccionado: { backgroundColor: '#DBEAFE', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, borderWidth: 1, borderColor: COLORES.primario },
  textoTagSeleccionado: { fontSize: 12, color: COLORES.primario, fontWeight: 'bold' },
  
  contenedorIntensidad: { marginTop: ESPACIADO.sm },
  textosIntensidad: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  labelIntensidad: { fontSize: 12, color: COLORES.textoSecundario, fontWeight: '600' },
  valorIntensidad: { fontSize: 12, fontWeight: 'bold' },
  fondoBarra: { height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden' },
  rellenoBarra: { height: '100%', borderRadius: 3 }
});