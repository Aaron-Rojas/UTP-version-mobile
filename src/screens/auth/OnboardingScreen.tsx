import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Si ya tienes un componente PildoraSeleccion, impórtalo. 
// Si no, aquí te dejo uno interno rápido y funcional:
const Pildora = ({ texto, seleccionado, onPress }: { texto: string, seleccionado: boolean, onPress: () => void }) => (
  <TouchableOpacity 
    activeOpacity={0.7} 
    onPress={onPress}
    style={[styles.pildoraBase, seleccionado && styles.pildoraActiva]}
  >
    <Text style={[styles.textoPildora, seleccionado && styles.textoPildoraActiva]}>
      {texto}
    </Text>
  </TouchableOpacity>
);

export default function OnboardingScreen({ navigation }: any) {
  // Estados para guardar las selecciones del usuario
  const [intereses, setIntereses] = useState<string[]>([]);
  const [preocupaciones, setPreocupaciones] = useState<string[]>([]);

  // Función genérica para seleccionar/deseleccionar múltiples opciones
  const toggleSeleccion = (item: string, lista: string[], setLista: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (lista.includes(item)) {
      setLista(lista.filter(i => i !== item)); // Lo quita si ya estaba
    } else {
      setLista([...lista, item]); // Lo agrega si no estaba
    }
  };

  const manejarContinuar = () => {
    // AQUÍ es donde, en el paso 3, inyectaremos la lógica del traductor JSON.
    // Por ahora, solo navegamos a la pantalla de Match para seguir armando la UI.
    console.log("Intereses:", intereses);
    console.log("Preocupaciones:", preocupaciones);
    navigation.replace('MainTabs', { screen: 'Match' }); 
  };

  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        {/* Cabecera del Onboarding */}
        <View style={styles.cabecera}>
          <Text style={styles.textoIntro}>Primero, cuéntanos un poco de ti.</Text>
          <Text style={styles.textoSubIntro}>
            No hay respuestas correctas. Esto nos ayuda a orientarte mejor.
          </Text>
        </View>

        {/* Sección 1: Intereses */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>¿Qué te interesa más?</Text>
          <View style={styles.contenedorPildoras}>
            {['Tecnología', 'Negocios', 'Creatividad', 'Ciencia', 'Personas', 'Procesos'].map((item) => (
              <Pildora 
                key={item} 
                texto={item} 
                seleccionado={intereses.includes(item)} 
                onPress={() => toggleSeleccion(item, intereses, setIntereses)} 
              />
            ))}
          </View>
        </View>

        {/* Sección 2: Preocupaciones */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>¿Qué te preocupa más al elegir?</Text>
          <View style={styles.contenedorPildoras}>
            {['Dificultad', 'Salida laboral', 'Duración', 'Costo', 'No me gusta'].map((item) => (
              <Pildora 
                key={item} 
                texto={item} 
                seleccionado={preocupaciones.includes(item)} 
                onPress={() => toggleSeleccion(item, preocupaciones, setPreocupaciones)} 
              />
            ))}
          </View>
        </View>

      </ContenedorScroll>

      {/* Botón Fijo en la parte inferior */}
      <View style={styles.footer}>
        <Boton 
          texto="Continuar" 
          variante="primario" 
          onPress={manejarContinuar} 
          // Deshabilitado si no ha elegido al menos una opción en cada sección
          // disabled={intereses.length === 0 || preocupaciones.length === 0} 
        />
      </View>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  cabecera: {
    marginTop: ESPACIADO.xl,
    marginBottom: ESPACIADO.xl,
  },
  textoIntro: {
    fontSize: 18,
    color: COLORES.textoPrincipal,
    marginBottom: 8,
  },
  textoSubIntro: {
    fontSize: 15,
    color: COLORES.textoSecundario,
    lineHeight: 22,
  },
  seccion: {
    marginBottom: ESPACIADO.xl,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginBottom: ESPACIADO.md,
  },
  contenedorPildoras: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Esto hace que las píldoras bajen a la siguiente línea si no caben
    gap: 12,
  },
  pildoraBase: {
    borderWidth: 1,
    borderColor: COLORES.borde,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: COLORES.fondo,
  },
  pildoraActiva: {
    borderColor: COLORES.primario,
    backgroundColor: '#EBF5FF', // Un azul muy clarito de fondo
  },
  textoPildora: {
    color: COLORES.textoSecundario,
    fontSize: 14,
    fontWeight: '500',
  },
  textoPildoraActiva: {
    color: COLORES.primario,
    fontWeight: 'bold',
  },
  footer: {
    padding: ESPACIADO.lg,
    backgroundColor: COLORES.fondo,
    borderTopWidth: 1,
    borderTopColor: COLORES.borde,
  }
});