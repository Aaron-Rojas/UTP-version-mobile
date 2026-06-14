import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import CabeceraPantalla from '../../components/layout/CabeceraPantalla';
import TarjetaProgresoHome from '../../components/specific/TarjetaProgresoHome';
import TarjetaAccionHome from '../../components/specific/TarjetaAccionHome';
import TarjetaInfoHome from '../../components/specific/TarjetaInfoHome';
import { COLORES, ESPACIADO } from '../../theme/tema';

export default function HomeScreen({ navigation }: any) {
  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        <CabeceraPantalla />

        <Text style={styles.saludo}>¡Hola!</Text>
        <Text style={styles.subtitulo}>
          Tu decisión puede tener dudas, pero no tiene que estar desordenada.
        </Text>

        {/* 1. La tarjeta ahora es inteligente y lee el JSON Schema por dentro */}
        <TarjetaProgresoHome />

        {/* 2. La tarjeta Azul (Call to Action principal) navega a Comparar */}
        <TarjetaAccionHome onPress={() => navigation.navigate('Comparar')} />
        
        {/* 3. Grilla de accesos rápidos */}
        <View style={styles.contenedorGrilla}>
          <TarjetaInfoHome 
            titulo="Entiende un curso" 
            subtitulo="Explora las mallas curriculares." 
            colorFondoIcono={COLORES.secundario} 
            onPress={() => navigation.navigate('Comparar')} // Lleva al coliseo/selector
          />
          
          <TarjetaInfoHome 
            titulo="Crea un plan familiar" 
            subtitulo="Involucra a tus padres en la decisión." 
            colorFondoIcono={COLORES.terciario} 
            onPress={() => navigation.navigate('Plan')} // Lleva a la hoja de ruta
          />
        </View>

      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  saludo: { fontSize: 28, fontWeight: 'bold', color: COLORES.textoPrincipal, marginTop: ESPACIADO.sm },
  subtitulo: { fontSize: 16, color: COLORES.textoSecundario, marginTop: ESPACIADO.sm, marginBottom: ESPACIADO.lg },
  contenedorGrilla: { flexDirection: 'row', gap: ESPACIADO.md, marginTop: ESPACIADO.lg, marginBottom: ESPACIADO.xl }
});