import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TarjetaBase from '../ui/TarjetaBase';
import { COLORES, ESPACIADO } from '../../theme/tema';

// Importamos el mock que respeta el action_plan.schema.json
import { actionPlanMock } from '../../mocks/actionPlanMock';

export default function TarjetaProgresoHome() {
  // 1. Extraemos las tareas del contrato
  const tareas = actionPlanMock.tasks;
  
  // 2. Calculamos la data real
  const tareasCompletadas = tareas.filter(t => t.status === 'done').length;
  const totalTareas = tareas.length;
  const porcentaje = totalTareas === 0 ? 0 : Math.round((tareasCompletadas / totalTareas) * 100);

  return (
    <View style={styles.margen}>
      <TarjetaBase>
        <Text style={styles.titulo}>Tu progreso actual</Text>
        <Text style={styles.subtitulo}>
          Has completado {tareasCompletadas} de {totalTareas} pasos recomendados.
        </Text>

        {/* Barra de Progreso Dinámica */}
        <View style={styles.contenedorBarra}>
          <View style={styles.fondoBarra}>
            <View style={[styles.rellenoBarra, { width: `${porcentaje}%` }]} />
          </View>
          <Text style={styles.textoPorcentaje}>{porcentaje}%</Text>
        </View>
      </TarjetaBase>
    </View>
  );
}

const styles = StyleSheet.create({
  margen: {
    marginBottom: ESPACIADO.md,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: COLORES.textoSecundario,
    marginBottom: ESPACIADO.md,
  },
  contenedorBarra: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fondoBarra: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  rellenoBarra: {
    height: '100%',
    backgroundColor: COLORES.terciario, // Un color verde/celeste motivador
    borderRadius: 4,
  },
  textoPorcentaje: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    width: 35,
  }
});