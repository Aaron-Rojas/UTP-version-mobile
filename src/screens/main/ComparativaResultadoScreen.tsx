import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import TarjetaBase from '../../components/ui/TarjetaBase';
import Boton from '../../components/ui/Boton';
import BarraComparativa from '../../components/specific/BarraComparativa';
import { COLORES, ESPACIADO } from '../../theme/tema';

import ModalExplicacionCurso from '../../components/specific/ModalExplicacionCurso';

// Mock del Grial
import { careerComparisonResponseMock } from '../../mocks/careerComparisonResponseMock';
import { curriculumSistemasMock } from '../../mocks/careerCurriculumMock';

export default function ComparativaResultadoScreen({ navigation }: any) {
  // 1. Refactorizamos los nombres de las pestañas
  const [tabActiva, setTabActiva] = useState<'Resumen' | 'Intensidad' | 'Cursos' | 'Acciones'>('Resumen');

  const data = careerComparisonResponseMock;
  
  // Nombres de las carreras para la cabecera y gráficos
  const nombreLeft = data.careerHighlights?.[0].title || 'Carrera A';
  const nombreRight = data.careerHighlights?.[1].title || 'Carrera B';


  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ContenedorSeguro>
      {/* Cabecera del Coliseo */}
      <View style={styles.cabeceraColiseo}>
        <View style={styles.textosCabecera}>
          <Text style={styles.tituloCabecera}>UTP Match</Text>
          <Text style={styles.subtituloCabecera}>{nombreLeft} VS {nombreRight}</Text>
        </View>
      </View>

      {/* Navegación de Sub-Pestañas */}
      <View style={styles.contenedorTabs}>
        {['Resumen', 'Intensidad', 'Cursos', 'Acciones'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tab, tabActiva === tab && styles.tabActiva]}
            onPress={() => setTabActiva(tab as any)}
          >
            <Text style={[styles.textoTab, tabActiva === tab && styles.textoTabActiva]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContenido} showsVerticalScrollIndicator={false}>
        
        {tabActiva === 'Resumen' && (
           <View>
             <Text style={styles.tituloSeccion}>Diferencia rápida</Text>
             <View style={styles.cajaInsight}>
               <Text style={styles.textoInsight}>{data.fitNarrative}</Text>
             </View>
           </View>
        )}

        {tabActiva === 'Intensidad' && (
          <View>
            <Text style={styles.tituloSeccion}>Análisis de Intensidad</Text>
            <Text style={styles.descripcionSeccion}>
              Compara el nivel de exigencia en diferentes áreas clave.
            </Text>

            <TarjetaBase>
              <BarraComparativa label="Matemáticas" scoreA={data.dimensions.left.math} scoreB={data.dimensions.right.math} />
              <BarraComparativa label="Programación" scoreA={data.dimensions.left.coding} scoreB={data.dimensions.right.coding} />
              <BarraComparativa label="Gestión y Liderazgo" scoreA={data.dimensions.left.management} scoreB={data.dimensions.right.management} />
              <BarraComparativa label="Comunicación" scoreA={data.dimensions.left.communication} scoreB={data.dimensions.right.communication} />
              <BarraComparativa label="Práctica de Laboratorio" scoreA={data.dimensions.left.practice} scoreB={data.dimensions.right.practice} />

              <View style={styles.leyenda}>
                <View style={styles.itemLeyenda}>
                  <View style={[styles.cuadroColor, { backgroundColor: COLORES.primario }]} />
                  <Text style={styles.textoLeyenda}>{nombreLeft}</Text>
                </View>
                <View style={styles.itemLeyenda}>
                  <View style={[styles.cuadroColor, { backgroundColor: '#0F766E' }]} />
                  <Text style={styles.textoLeyenda}>{nombreRight}</Text>
                </View>
              </View>
            </TarjetaBase>
          </View>
        )}

        {tabActiva === 'Cursos' && (
          <View>
            <Text style={styles.tituloSeccion}>Malla Curricular</Text>
            <Text style={styles.descripcionSeccion}>
              Toca cualquier curso para que nuestra IA te explique de qué trata.
            </Text>

            <View style={{ flexDirection: 'row', gap: 10, marginBottom: ESPACIADO.md }}>
              <TouchableOpacity style={[styles.pildoraFiltro, styles.pildoraFiltroActiva]}>
                <Text style={[styles.textoFiltro, styles.textoFiltroActivo]}>{nombreLeft}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pildoraFiltro}>
                <Text style={styles.textoFiltro}>{nombreRight}</Text>
              </TouchableOpacity>
            </View>

            {curriculumSistemasMock.cycles.map((ciclo) => (
              <View key={ciclo.cycleNumber} style={{ marginBottom: ESPACIADO.lg }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORES.primario, marginBottom: 8 }}>
                  Ciclo {ciclo.cycleNumber}
                </Text>
                
                {ciclo.courses.map((curso) => (
                  <TouchableOpacity 
                    key={curso.courseId} 
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: COLORES.textoBlanco,
                      padding: ESPACIADO.md,
                      borderRadius: ESPACIADO.radio,
                      marginBottom: 8,
                      borderWidth: 1,
                      borderColor: COLORES.bordeGris,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onPress={() => setModalVisible(true)}                  
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORES.textoPrincipal }}>
                        {curso.name}
                      </Text>
                      <Text style={{ fontSize: 12, color: COLORES.textoSecundario, marginTop: 4 }}>
                        {curso.area} • {curso.credits} créditos
                      </Text>
                    </View>
                    
                    <View style={{ backgroundColor: '#E0F2FE', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 }}>
                      <Text style={{ fontSize: 12, color: '#0369A1', fontWeight: 'bold' }}>Explicar</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        )}

        {tabActiva === 'Acciones' && (
          <View>
            <Text style={styles.tituloSeccion}>Siguientes Pasos</Text>
            <TarjetaBase>
              <Text style={styles.subtituloTarjeta}>Preguntas para ti o tu familia:</Text>
              {data.recommendedQuestions?.map((pregunta, index) => (
                <View key={index} style={styles.filaBullet}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.textoBullet}>{pregunta}</Text>
                </View>
              ))}
            </TarjetaBase>
          </View>
        )}
      </ScrollView>

    <View style={styles.footerFlotante}>
    <Boton 
    texto="Ver match con mi perfil" 
    variante="primario" 
    onPress={() => navigation.navigate('MainTabs', { screen: 'Match' })} 
    nombreIcono="sparkles"
    />
</View>
      
      <ModalExplicacionCurso 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  // ... (Estilos anteriores de cabecera y tabs) ...
  cabeceraColiseo: { paddingVertical: ESPACIADO.md, borderBottomWidth: 1, borderBottomColor: COLORES.borde },
  textosCabecera: { alignItems: 'center' },
  tituloCabecera: { fontSize: 20, fontWeight: 'bold', color: COLORES.primario },
  subtituloCabecera: { fontSize: 12, color: COLORES.textoSecundario, fontWeight: '600', marginTop: 2 },
  contenedorTabs: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: ESPACIADO.lg, borderBottomWidth: 1, borderBottomColor: COLORES.borde },
  tab: { paddingVertical: 12, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  tabActiva: { borderBottomColor: COLORES.primario },
  textoTab: { fontSize: 13, color: COLORES.textoSecundario, fontWeight: '600' },
  textoTabActiva: { color: COLORES.primario, fontWeight: 'bold' },
  scroll: { flex: 1 },
  scrollContenido: { padding: ESPACIADO.lg, paddingBottom: 100 },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: 4 },
  descripcionSeccion: { fontSize: 14, color: COLORES.textoSecundario, marginBottom: ESPACIADO.md },
  
  // Estilos nuevos para Leyenda y Bullets
  leyenda: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: ESPACIADO.lg, paddingTop: ESPACIADO.md, borderTopWidth: 1, borderTopColor: COLORES.borde },
  itemLeyenda: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  cuadroColor: { width: 12, height: 12, borderRadius: 3 },
  textoLeyenda: { fontSize: 12, color: COLORES.textoSecundario, fontWeight: '600' },
  subtituloTarjeta: { fontSize: 14, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: ESPACIADO.sm },
  filaBullet: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8, paddingRight: ESPACIADO.sm },
  bullet: { fontSize: 16, color: COLORES.primario, marginRight: 8, fontWeight: 'bold' },
  textoBullet: { fontSize: 14, color: COLORES.textoSecundario, lineHeight: 20, flex: 1 },
  
  cajaInsight: { backgroundColor: '#E0F2FE', padding: ESPACIADO.md, borderRadius: ESPACIADO.radio, marginTop: ESPACIADO.sm },
  textoInsight: { fontSize: 14, color: '#0369A1', fontWeight: '600', lineHeight: 20 },
  footerFlotante: { padding: ESPACIADO.lg, backgroundColor: COLORES.fondo, borderTopWidth: 1, borderTopColor: COLORES.borde },

  pildoraFiltro: { backgroundColor: '#F1F5F9', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  pildoraFiltroActiva: { backgroundColor: COLORES.primario },
  textoFiltro: { color: COLORES.textoSecundario, fontWeight: '600', fontSize: 13 },
  textoFiltroActivo: { color: COLORES.textoBlanco }
});