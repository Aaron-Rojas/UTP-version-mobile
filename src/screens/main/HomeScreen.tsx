import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import CabeceraPantalla from '../../components/layout/CabeceraPantalla';
import { COLORES, ESPACIADO } from '../../theme/tema';
import TarjetaProgresoHome from '../../components/specific/TarjetaProgresoHome';
import TarjetaAccionHome from '../../components/specific/TarjetaAccionHome';
import TarjetaInfoHome from '../../components/specific/TarjetaInfoHome';

export default function HomeScreen({ navigation }: any ) {
  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        {/* 1. Nuestra nueva Cabecera */}
        <CabeceraPantalla />

        {/* 2. El saludo del Figma */}
        <Text style={styles.saludo}>¡Hola, Camila!</Text>
        <Text style={styles.subtitulo}>
          Tu decisión puede tener dudas, pero no tiene que estar desordenada.
        </Text>

        <TarjetaProgresoHome/>

        <TarjetaAccionHome onPress={() => {}}/>
        
    <View style={styles.contenedorGrilla}>
  
    <TarjetaInfoHome 
      titulo="Entiende un curso" 
      subtitulo="Explora las mallas curriculares." 
      colorFondoIcono={COLORES.secundario} 
      onPress={() => navigation.navigate('Compare')} 
    />
    
    <TarjetaInfoHome 
    titulo="Crea un plan familiar" 
    subtitulo="Involucra a tus padres en la decisión." 
    colorFondoIcono={COLORES.terciario} 
    onPress={() => navigation.navigate('Plan')} 
    />
  </View>

      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  saludo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORES.textoPrincipal,
    marginTop: ESPACIADO.sm,
  },
  subtitulo: {
    fontSize: 16,
    color: COLORES.textoSecundario,
    marginTop: ESPACIADO.sm,
    marginBottom: ESPACIADO.lg,
  },
  contenedorGrilla: {
  flexDirection: 'row', // Esto es lo que pone una tarjeta al lado de la otra
  gap: ESPACIADO.md, // La separación central
  marginTop: ESPACIADO.lg,
  marginBottom: ESPACIADO.xl, // Da un margen inferior para que no choque con la barra de navegación
}
});