import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO, SOMBRAS } from '../../theme/tema';

// Píldora simple y rápida, sin depender de íconos para evitar errores de importación
const PildoraRespuesta = ({ texto, seleccionado, onPress }: { texto: string, seleccionado: boolean, onPress: () => void }) => (
  <TouchableOpacity 
    activeOpacity={0.7} 
    onPress={onPress}
    style={[styles.pildoraBase, seleccionado && styles.pildoraActiva, !seleccionado && SOMBRAS.suave]}
  >
    <Text style={[styles.textoPildora, seleccionado && styles.textoPildoraActiva]}>
      {texto}
    </Text>
  </TouchableOpacity>
);

// 🚀 DATA HARDCODEADA (7 Preguntas tácticas para adolescentes)
const PREGUNTAS = [
  { id: 1, texto: "Si te dan un problema difícil, tú...", opciones: ["Busco la lógica", "Uso mi creatividad", "Pido ayuda", "Busco en Google"] },
  { id: 2, "texto": "Un proyecto falla después de horas de trabajo...", opciones: ["Me frustro mucho", "Le pregunto a un amigo", "Sigo hasta que salga", "Hago otra cosa un rato"] },
  { id: 3, "texto": "Tu lugar de trabajo ideal se parece a...", opciones: ["Una oficina moderna", "Cualquier lado (Remoto)", "Estar en la calle/campo", "Un laboratorio/taller"] },
  { id: 4, "texto": "¿Qué tipo de clases toleras mejor?", opciones: ["Puros números", "Mucha lectura", "Talleres prácticos", "Debates y exposición"] },
  { id: 5, "texto": "En un trabajo grupal, tú eres el que...", opciones: ["Lidera y organiza", "Hace la mayor parte", "Expone al final", "Diseña y pone bonito todo"] },
  { id: 6, "texto": "Te llama más la atención crear...", opciones: ["Apps y código", "Mi propio negocio", "Contenido/Historias", "Planos o máquinas"] },
  { id: 7, "texto": "En tu tiempo libre prefieres...", opciones: ["Jugar en la PC/Consola", "Salir con amigos", "Armar/Desarmar cosas", "Ver series/Aprender algo"] }
];

export default function CuestionarioScreen({ navigation }: any) {
  const [pasoActual, setPasoActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, string>>({});

  const pregunta = PREGUNTAS[pasoActual];
  const progreso = ((pasoActual + 1) / PREGUNTAS.length) * 100;

  const manejarSeleccion = (respuesta: string) => {
    setRespuestas({ ...respuestas, [pregunta.id]: respuesta });
  };

  const manejarSiguiente = () => {
    if (pasoActual < PREGUNTAS.length - 1) {
      setPasoActual(pasoActual + 1);
    } else {
      console.log("Respuestas finales:", respuestas);
      // 🚀 Termina y manda al Match
      navigation.replace('MainTabs', { screen: 'Match' });
    }
  };

  return (
    <ContenedorSeguro>
      <View style={styles.contenedor}>
        
        {/* Barra de progreso superior */}
        <View style={styles.contenedorProgreso}>
          <Text style={styles.textoProgreso}>Pregunta {pasoActual + 1} de {PREGUNTAS.length}</Text>
          <View style={styles.barraFondo}>
            <View style={[styles.barraRelleno, { width: `${progreso}%` }]} />
          </View>
        </View>

        {/* Área de la Pregunta */}
        <View style={styles.areaPregunta}>
          <Text style={styles.tituloPregunta}>{pregunta.texto}</Text>
          
          <View style={styles.contenedorOpciones}>
            {pregunta.opciones.map((opcion) => (
              <PildoraRespuesta
                key={opcion}
                texto={opcion}
                seleccionado={respuestas[pregunta.id] === opcion}
                onPress={() => manejarSeleccion(opcion)}
              />
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Boton 
            texto={pasoActual === PREGUNTAS.length - 1 ? "Ver mi Oráculo" : "Siguiente"} 
            variante="primario" 
            onPress={manejarSiguiente}
            nombreIcono='a' 
            deshabilitado={!respuestas[pregunta.id]} // Obliga a responder para avanzar
          />
        </View>

      </View>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.fondo },
  contenedorProgreso: { padding: ESPACIADO.lg, paddingBottom: 0 },
  textoProgreso: { fontSize: 14, color: COLORES.textoSecundario, fontWeight: 'bold', marginBottom: 8 },
  barraFondo: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4 },
  barraRelleno: { height: '100%', backgroundColor: COLORES.primario, borderRadius: 4 },
  
  areaPregunta: { flex: 1, padding: ESPACIADO.lg, justifyContent: 'center' },
  tituloPregunta: { fontSize: 24, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: ESPACIADO.xl, textAlign: 'center' },
  
  contenedorOpciones: { gap: 16 },
  pildoraBase: { backgroundColor: COLORES.textoBlanco, borderWidth: 2, borderColor: 'transparent', borderRadius: ESPACIADO.radio, paddingVertical: 16, paddingHorizontal: 20, alignItems: 'center' },
  pildoraActiva: { borderColor: COLORES.primario, backgroundColor: '#E0F2FE' },
  textoPildora: { fontSize: 16, color: COLORES.textoSecundario, fontWeight: '600' },
  textoPildoraActiva: { color: COLORES.primario, fontWeight: 'bold' },
  
  footer: { padding: ESPACIADO.lg, borderTopWidth: 1, borderTopColor: '#E2E8F0' }
});