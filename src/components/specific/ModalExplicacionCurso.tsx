import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Boton from '../ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';
import { syllabusExplanationMock } from '../../mocks/syllabusExplanationMock';

interface PropsModal {
  visible: boolean;
  onClose: () => void;
  cursoId?: string; // En el futuro servirá para hacer el fetch de la IA
}

export default function ModalExplicacionCurso({ visible, onClose, cursoId }: PropsModal) {
  const data = syllabusExplanationMock;

  // Mini-componente interno para las barras de dificultad de 0 a 10
  const MiniBarra = ({ label, valor }: { label: string, valor: number }) => (
    <View style={styles.filaDificultad}>
      <Text style={styles.labelDificultad}>{label}</Text>
      <View style={styles.contenedorFondoMini}>
        <View style={[styles.rellenoMini, { width: `${valor * 10}%`, backgroundColor: valor > 7 ? COLORES.primario : COLORES.terciario }]} />
      </View>
      <Text style={styles.valorDificultad}>{valor}/10</Text>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.panelInferior}>
          
          {/* Cabecera del Modal */}
          <View style={styles.cabeceraModal}>
            <View style={styles.pillDrag} />
            <TouchableOpacity onPress={onClose} style={styles.botonCerrar}>
              <Text style={styles.textoCerrar}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>
            
            <Text style={styles.titulo}>{data.courseName}</Text>
            
            {/* Explicación Empática */}
            <View style={styles.cajaExplicacion}>
              <Text style={styles.textoExplicacion}>{data.plainExplanation}</Text>
            </View>

            {/* Por qué importa */}
            <Text style={styles.subtitulo}>¿Por qué es clave?</Text>
            <Text style={styles.textoBase}>{data.whyItMatters}</Text>

            {/* Dificultad Dinámica */}
            <View style={styles.cajaDificultad}>
              <Text style={styles.subtituloTarjeta}>Radiografía del Curso</Text>
              <MiniBarra label="Práctica" valor={data.difficultySignals.practiceIntensity} />
              <MiniBarra label="Lectura" valor={data.difficultySignals.readingIntensity} />
              <MiniBarra label="Abstracción" valor={data.difficultySignals.abstractReasoning} />
              <MiniBarra label="Tolerancia a frustración" valor={data.difficultySignals.frustrationTolerance} />
            </View>

            {/* Habilidades */}
            <Text style={styles.subtitulo}>Habilidades que ganarás</Text>
            <View style={styles.filaTags}>
              {data.skillsYouBuild?.map((skill, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.textoTag}>{skill}</Text>
                </View>
              ))}
            </View>

            <View style={styles.espaciadorFooter} />
          </ScrollView>

          {/* Footer Fijo */}
          <View style={styles.footer}>
            <Boton texto="Entendido" variante="primario" onPress={onClose} />
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  panelInferior: {
    backgroundColor: COLORES.fondo,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '85%', // Ocupa el 85% de la pantalla
    overflow: 'hidden',
  },
  cabeceraModal: {
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORES.borde,
  },
  pillDrag: {
    width: 40,
    height: 5,
    backgroundColor: '#CBD5E1',
    borderRadius: 3,
    marginBottom: 8,
  },
  botonCerrar: {
    position: 'absolute',
    right: ESPACIADO.lg,
    top: 12,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 15,
  },
  textoCerrar: { fontSize: 16, color: COLORES.textoSecundario, fontWeight: 'bold' },
  scrollPadding: { padding: ESPACIADO.lg },
  titulo: { fontSize: 22, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: ESPACIADO.md },
  
  cajaExplicacion: { backgroundColor: '#F8FAFC', padding: ESPACIADO.md, borderRadius: ESPACIADO.radio, borderLeftWidth: 4, borderLeftColor: COLORES.primario, marginBottom: ESPACIADO.lg },
  textoExplicacion: { fontSize: 15, color: COLORES.textoPrincipal, lineHeight: 22 },
  
  subtitulo: { fontSize: 16, fontWeight: 'bold', color: COLORES.textoPrincipal, marginTop: ESPACIADO.sm, marginBottom: 8 },
  textoBase: { fontSize: 14, color: COLORES.textoSecundario, lineHeight: 20, marginBottom: ESPACIADO.lg },
  
  cajaDificultad: { borderWidth: 1, borderColor: COLORES.borde, padding: ESPACIADO.md, borderRadius: ESPACIADO.radio, marginBottom: ESPACIADO.lg },
  subtituloTarjeta: { fontSize: 14, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: 12 },
  filaDificultad: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  labelDificultad: { flex: 1, fontSize: 13, color: COLORES.textoSecundario },
  contenedorFondoMini: { flex: 1.5, height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, marginHorizontal: 10 },
  rellenoMini: { height: '100%', borderRadius: 3 },
  valorDificultad: { width: 35, fontSize: 12, fontWeight: 'bold', textAlign: 'right' },
  
  filaTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: ESPACIADO.lg },
  tag: { backgroundColor: '#E0F2FE', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16 },
  textoTag: { fontSize: 12, color: '#0369A1', fontWeight: '600' },
  
  espaciadorFooter: { height: 40 },
  footer: { padding: ESPACIADO.lg, borderTopWidth: 1, borderTopColor: COLORES.borde, backgroundColor: COLORES.fondo },
});