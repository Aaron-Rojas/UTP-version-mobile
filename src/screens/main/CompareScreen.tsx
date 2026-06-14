import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import CabeceraPantalla from '../../components/layout/CabeceraPantalla';
import TarjetaSeleccionCarrera from '../../components/specific/TarjetaSeleccionCarrera';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Importamos la data falsa del catálogo
import { catalogoCarrerasMock } from '../../mocks/catalogoCarrerasMock';

export default function CompareScreen({ navigation }: any) {
  const [filtroActivo, setFiltroActivo] = useState('Todas');
  const [carrerasSeleccionadas, setCarrerasSeleccionadas] = useState<string[]>([]);
  
  const categorias = ['Todas', 'Ingeniería', 'Salud', 'Negocios'];

  // Lógica para seleccionar máximo 2 carreras
  const manejarSeleccion = (id: string) => {
    if (carrerasSeleccionadas.includes(id)) {
      setCarrerasSeleccionadas(carrerasSeleccionadas.filter(c => c !== id));
    } else {
      if (carrerasSeleccionadas.length < 2) {
        setCarrerasSeleccionadas([...carrerasSeleccionadas, id]);
      }
    }
  };

  return (
    <ContenedorSeguro>
      {/* Cabecera Fija */}
      <View style={styles.paddingGlobal}>
        <CabeceraPantalla />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContenido} showsVerticalScrollIndicator={false}>
        
        {/* Buscador */}
        <View style={styles.buscador}>
          {/* TODO: [RECORDATORIO EXPO] Ícono de lupa */}
          <TextInput 
            placeholder="Buscar carrera..." 
            style={styles.inputBuscador}
            placeholderTextColor={COLORES.textoSecundario}
          />
        </View>

        {/* Carrusel de Filtros */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contenedorFiltros}>
          {categorias.map(cat => (
            <TouchableOpacity 
              key={cat} 
              activeOpacity={0.7}
              onPress={() => setFiltroActivo(cat)}
              style={[styles.pildoraFiltro, filtroActivo === cat && styles.pildoraFiltroActiva]}
            >
              <Text style={[styles.textoFiltro, filtroActivo === cat && styles.textoFiltroActivo]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Lista de Carreras */}
        <View style={styles.listaCarreras}>
          {catalogoCarrerasMock
            .filter(c => filtroActivo === 'Todas' || c.categoria === filtroActivo)
            .map(carrera => (
            <TarjetaSeleccionCarrera 
              key={carrera.id}
              nombre={carrera.nombre}
              descripcion={carrera.descripcion}
              tags={carrera.tags}
              intensidadPromedio={carrera.intensidadPromedio}
              seleccionada={carrerasSeleccionadas.includes(carrera.id)}
              onPress={() => manejarSeleccion(carrera.id)}
            />
          ))}
        </View>

      </ScrollView>

      {/* Panel Flotante Inferior (Aparece solo si hay al menos 1 seleccionada) */}
      {carrerasSeleccionadas.length > 0 && (
        <View style={styles.panelFlotante}>
          <Text style={styles.textoPanel}>Seleccionaste {carrerasSeleccionadas.length} de 2</Text>
          
          <Boton 
            texto={carrerasSeleccionadas.length === 2 ? "Comparar ahora" : "Elige una carrera más"} 
            variante={carrerasSeleccionadas.length === 2 ? "primario" : "secundario"}
            // Aquí viajaremos al "Coliseo" cuando el usuario tenga 2 carreras
            onPress={() => {
              if (carrerasSeleccionadas.length === 2) {
                 // navigation.navigate('ComparativaResultado', { ids: carrerasSeleccionadas })
                console.log("Viajando al coliseo con:", carrerasSeleccionadas);
                navigation.navigate('Coliseo', { ids: carrerasSeleccionadas });              
              }
            }} 
          />
        </View>
      )}

    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  paddingGlobal: { paddingHorizontal: ESPACIADO.lg },
  scroll: { flex: 1 },
  scrollContenido: { paddingHorizontal: ESPACIADO.lg, paddingBottom: 100 }, // Padding para que no tape el panel
  
  buscador: {
    backgroundColor: '#F1F5F9',
    borderRadius: ESPACIADO.radio,
    paddingHorizontal: ESPACIADO.md,
    paddingVertical: 12,
    marginBottom: ESPACIADO.md,
  },
  inputBuscador: { fontSize: 16, color: COLORES.textoPrincipal },
  
  contenedorFiltros: { marginBottom: ESPACIADO.lg, flexDirection: 'row' },
  pildoraFiltro: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  pildoraFiltroActiva: { backgroundColor: COLORES.primario },
  textoFiltro: { color: COLORES.textoSecundario, fontWeight: '600' },
  textoFiltroActivo: { color: COLORES.textoBlanco },
  
  listaCarreras: { gap: 8 },
  
  panelFlotante: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORES.fondo,
    padding: ESPACIADO.lg,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  textoPanel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginBottom: ESPACIADO.sm,
  }
});