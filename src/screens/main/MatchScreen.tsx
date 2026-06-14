import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Layouts y UI
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import CabeceraPantalla from '../../components/layout/CabeceraPantalla';
import TarjetaMatch from '../../components/specific/TarjetaMatch';
import BannerInformativo from '../../components/ui/BannerInformativo';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

// 👇 Importamos el Mock de datos desde su propia capa
import { reporteMock } from '../../mocks/vocationalReportMock';

export default function MatchScreen({ navigation }: any) {
  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        
        <CabeceraPantalla />

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Tu Match Perfecto</Text>
          <Text style={styles.subtitulo}>
            Hemos analizado tu perfil. Aquí están tus mejores opciones.
          </Text>
        </View>

        {/* Mapeo limpio y directo */}
        <View style={styles.contenedorTarjetas}>
          {reporteMock.topCareers.map((carrera, index) => (
            <TarjetaMatch 
              key={carrera.careerId}
              carrera={carrera.name}
              porcentaje={carrera.score}
              descripcion={carrera.reason}
              esTop1={index === 0} 
            />
          ))}
        </View>

        <BannerInformativo 
          texto="Mensaje Importante: Este resultado no decide por ti, te ayuda a conversar mejor con tu familia." 
        />

        <View style={styles.contenedorBoton}>
          <Boton 
            texto="Crear mi plan" 
            variante="primario" 
            onPress={() => navigation.navigate('Plan')} 
          />
        </View>

      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    alignItems: 'center',
    marginTop: ESPACIADO.md,
    marginBottom: ESPACIADO.xl,
    paddingHorizontal: ESPACIADO.md,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORES.primario,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: COLORES.textoSecundario,
    textAlign: 'center',
    lineHeight: 22,
  },
  contenedorTarjetas: {
    marginBottom: ESPACIADO.lg,
  },
  contenedorBoton: {
    marginTop: ESPACIADO.sm,
    marginBottom: ESPACIADO.xl * 1.5, // Espacio extra abajo para que no choque con el TabNavigator
  }
});