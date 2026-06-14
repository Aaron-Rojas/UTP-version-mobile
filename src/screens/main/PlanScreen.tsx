import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Layouts
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import CabeceraPantalla from '../../components/layout/CabeceraPantalla';
import TarjetaTarea from '../../components/specific/TarjetaTarea';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Mock del Plan de Acción
import { actionPlanMock } from '../../mocks/actionPlanMock';

export default function PlanScreen() {
  // Inicializamos el estado con las tareas que vienen del contrato
  const [tareas, setTareas] = useState(actionPlanMock.tasks);

  // Lógica para alternar el estado de la tarea (simulando interactividad)
  const alternarEstadoTarea = (id: string) => {
    setTareas(tareasActuales => 
      tareasActuales.map(tarea => {
        if (tarea.id === id) {
          // Si está pendiente, pasa a completada. Si está completada/omitida, vuelve a pendiente.
          const nuevoEstado = tarea.status === 'pending' ? 'done' : 'pending';
          return { ...tarea, status: nuevoEstado as 'pending' | 'done' | 'skipped' };
        }
        return tarea;
      })
    );
  };

  // Calculamos el progreso para mostrar un resumen
  const tareasCompletadas = tareas.filter(t => t.status === 'done').length;
  const progreso = Math.round((tareasCompletadas / tareas.length) * 100);

  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        <CabeceraPantalla />

        {/* Encabezado del Plan */}
        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Tu Plan de Acción</Text>
          <Text style={styles.subtitulo}>
            Has elegido Ingeniería de Sistemas. Estos son tus próximos pasos recomendados.
          </Text>
          
          {/* Barra de Progreso General */}
          <View style={styles.contenedorProgreso}>
            <View style={styles.textosProgreso}>
              <Text style={styles.textoProgresoLabel}>Progreso</Text>
              <Text style={styles.textoProgresoPorcentaje}>{progreso}%</Text>
            </View>
            <View style={styles.barraFondo}>
              <View style={[styles.barraRelleno, { width: `${progreso}%` }]} />
            </View>
          </View>
        </View>

        {/* Lista Interactiva de Tareas */}
        <View style={styles.listaTareas}>
          <Text style={styles.tituloLista}>Tareas Pendientes</Text>
          
          {tareas.map(tarea => (
            <TarjetaTarea 
              key={tarea.id}
              titulo={tarea.title}
              descripcion={tarea.description}
              estado={tarea.status as 'pending' | 'done' | 'skipped'}
              onPress={() => alternarEstadoTarea(tarea.id)}
            />
          ))}
        </View>

        {/* Nota del Backend */}
        {actionPlanMock.notes && (
          <View style={styles.cajaNota}>
            <Text style={styles.textoNota}>💡 {actionPlanMock.notes}</Text>
          </View>
        )}

      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  encabezado: { paddingHorizontal: ESPACIADO.md, marginTop: ESPACIADO.sm, marginBottom: ESPACIADO.xl },
  titulo: { fontSize: 24, fontWeight: 'bold', color: COLORES.primario, marginBottom: 8 },
  subtitulo: { fontSize: 15, color: COLORES.textoSecundario, lineHeight: 22, marginBottom: ESPACIADO.lg },
  
  contenedorProgreso: { backgroundColor: '#F8FAFC', padding: ESPACIADO.md, borderRadius: ESPACIADO.radio, borderWidth: 1, borderColor: COLORES.borde },
  textosProgreso: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  textoProgresoLabel: { fontSize: 14, fontWeight: 'bold', color: COLORES.textoPrincipal },
  textoProgresoPorcentaje: { fontSize: 14, fontWeight: 'bold', color: COLORES.primario },
  barraFondo: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4, overflow: 'hidden' },
  barraRelleno: { height: '100%', backgroundColor: COLORES.primario, borderRadius: 4 },
  
  listaTareas: { marginBottom: ESPACIADO.xl },
  tituloLista: { fontSize: 18, fontWeight: 'bold', color: COLORES.textoPrincipal, marginBottom: ESPACIADO.md, paddingHorizontal: ESPACIADO.sm },
  
  cajaNota: { backgroundColor: '#FEF3C7', padding: ESPACIADO.md, borderRadius: ESPACIADO.radio, marginBottom: ESPACIADO.xl * 2 },
  textoNota: { fontSize: 14, color: '#92400E', lineHeight: 20 },
});