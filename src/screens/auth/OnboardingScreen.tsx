import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 🚀 IMPORTACIÓN DE ÍCONOS
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO, SOMBRAS } from '../../theme/tema'; // 🚀 APROVECHAMOS LAS SOMBRAS

// 1. Refactorizamos la Píldora para que acepte el ícono
const Pildora = ({ 
  texto, 
  icono, 
  seleccionado, 
  onPress 
}: { 
  texto: string, 
  icono: keyof typeof Ionicons.glyphMap, 
  seleccionado: boolean, 
  onPress: () => void 
}) => (
  <TouchableOpacity 
    activeOpacity={0.7} 
    onPress={onPress}
    style={[
      styles.pildoraBase, 
      seleccionado && styles.pildoraActiva,
      !seleccionado && SOMBRAS.suave // Sombra suave solo cuando no está "hundida/activa"
    ]}
  >
    <Ionicons 
      name={icono} 
      size={16} 
      color={seleccionado ? COLORES.primario : COLORES.textoSecundario} 
      style={{ marginRight: 6 }} 
    />
    <Text style={[styles.textoPildora, seleccionado && styles.textoPildoraActiva]}>
      {texto}
    </Text>
  </TouchableOpacity>
);

export default function OnboardingScreen({ navigation }: any) {
  const [intereses, setIntereses] = useState<string[]>([]);
  const [preocupaciones, setPreocupaciones] = useState<string[]>([]);

  // 2. Mapeamos la data real con sus íconos para la UI
  const dataIntereses: { texto: string, icono: keyof typeof Ionicons.glyphMap }[] = [
    { texto: 'Tecnología', icono: 'laptop-outline' },
    { texto: 'Negocios', icono: 'briefcase-outline' },
    { texto: 'Creatividad', icono: 'color-palette-outline' },
    { texto: 'Ciencia', icono: 'flask-outline' },
    { texto: 'Personas', icono: 'people-outline' },
    { texto: 'Procesos', icono: 'settings-outline' },
  ];

  const dataPreocupaciones: { texto: string, icono: keyof typeof Ionicons.glyphMap }[] = [
    { texto: 'Dificultad', icono: 'speedometer-outline' },
    { texto: 'Salida laboral', icono: 'cash-outline' },
    { texto: 'Duración', icono: 'time-outline' },
    { texto: 'Costo', icono: 'wallet-outline' },
    { texto: 'No me gusta', icono: 'heart-dislike-outline' },
  ];

  const toggleSeleccion = (item: string, lista: string[], setLista: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (lista.includes(item)) {
      setLista(lista.filter(i => i !== item));
    } else {
      setLista([...lista, item]);
    }
  };

  const manejarContinuar = () => {
    navigation.replace('Form'); 
  };

  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        <View style={styles.cabecera}>
          <Text style={styles.textoIntro}>Primero, cuéntanos un poco de ti.</Text>
          <Text style={styles.textoSubIntro}>
            No hay respuestas correctas. Esto nos ayuda a orientarte mejor.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>¿Qué te interesa más?</Text>
          <View style={styles.contenedorPildoras}>
            {dataIntereses.map((item) => (
              <Pildora 
                key={item.texto} 
                texto={item.texto} 
                icono={item.icono}
                seleccionado={intereses.includes(item.texto)} 
                onPress={() => toggleSeleccion(item.texto, intereses, setIntereses)} 
              />
            ))}
          </View>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>¿Qué te preocupa más al elegir?</Text>
          <View style={styles.contenedorPildoras}>
            {dataPreocupaciones.map((item) => (
              <Pildora 
                key={item.texto} 
                texto={item.texto} 
                icono={item.icono}
                seleccionado={preocupaciones.includes(item.texto)} 
                onPress={() => toggleSeleccion(item.texto, preocupaciones, setPreocupaciones)} 
              />
            ))}
          </View>
        </View>

      </ContenedorScroll>

      <View style={styles.footer}>
        <Boton 
          texto="Continuar" 
          variante="primario" 
          onPress={manejarContinuar} 
          nombreIcono="arrow-forward-outline"
        />
      </View>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  cabecera: { marginTop: ESPACIADO.xl, marginBottom: ESPACIADO.xl },
  textoIntro: { fontSize: 22, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: 8 },
  textoSubIntro: { fontSize: 15, color: COLORES.textoSecundario, lineHeight: 22 },
  seccion: { marginBottom: ESPACIADO.xl },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: ESPACIADO.md },
  contenedorPildoras: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  pildoraBase: {
    flexDirection: 'row', // 🚀 Alineamos ícono y texto horizontalmente
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORES.borde,
    borderRadius: ESPACIADO.radio,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: COLORES.textoBlanco,
  },
  pildoraActiva: {
    borderColor: COLORES.primario,
    backgroundColor: '#E0F2FE', // Azul muy suave
  },
  textoPildora: { color: COLORES.textoSecundario, fontSize: 14, fontWeight: '600' },
  textoPildoraActiva: { color: COLORES.primario, fontWeight: 'bold' },
  footer: { padding: ESPACIADO.lg, backgroundColor: COLORES.fondo, borderTopWidth: 1, borderTopColor: COLORES.bordeGris }
});