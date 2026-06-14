import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Importando nuestros Ladrillos UI
import TarjetaBase from '../ui/TarjetaBase';
import BarraProgreso from '../ui/BarraProgreso'; 
import { COLORES, ESPACIADO } from '../../theme/tema';

export default function TarjetaProgresoHome() {
  // Lógica: Esto luego vendrá del backend (Supabase)
  const pasoActual = 1; 
  const pasosTotales = 3;

  return (
    <TarjetaBase>
      
      {/* Cabecera */}
      <View style={styles.cabecera}>
        <Text style={styles.titulo}>Tu progreso</Text>
        <Text style={styles.contador}>{pasoActual} de {pasosTotales} pasos</Text>
      </View>

      {/* 1. Consumiendo tu componente UI independiente */}
      <View style={styles.contenedorBarra}>
        <BarraProgreso pasoActual={pasoActual} pasosTotales={pasosTotales} />
      </View>

      {/* 2. Los "Radio Buttons" / Checklist Secuencial */}
      <View style={styles.listaRadios}>
        
        {/* Paso 1: Completado */}
        <View style={styles.fila}>
          <View style={styles.radioActivo} />
          <Text style={styles.textoActivo}>Comparar opciones</Text>
        </View>

        {/* Paso 2: Pendiente */}
        <View style={styles.fila}>
          <View style={styles.radioInactivo} />
          <Text style={styles.textoInactivo}>Entender cursos</Text>
        </View>

        {/* Paso 3: Pendiente */}
        <View style={styles.fila}>
          <View style={styles.radioInactivo} />
          <Text style={styles.textoInactivo}>Crear plan familiar</Text>
        </View>

      </View>

    </TarjetaBase>
  );
}

const styles = StyleSheet.create({
  cabecera: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: ESPACIADO.md 
  },
  titulo: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: COLORES.textoPrincipal 
  },
  contador: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: COLORES.primario 
  },
  contenedorBarra: { 
    marginBottom: ESPACIADO.lg 
  },
  
  // Estilos de los "Radios"
  listaRadios: { 
    gap: 12 
  },
  fila: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10 
  },
  radioActivo: { 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: COLORES.primario, 
    borderWidth: 4, 
    borderColor: '#Dbf0fe' // Simula el halo claro alrededor del check azul
  },
  radioInactivo: { 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: COLORES.borde 
  },
  textoActivo: { 
    fontWeight: 'bold', 
    color: COLORES.textoPrincipal 
  },
  textoInactivo: { 
    color: COLORES.textoSecundario 
  }
});