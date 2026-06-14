import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import InputTexto from '../../components/ui/InputTexto';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

// navigation entra por props gracias a React Navigation
export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        <View style={styles.cabecera}>
          <Text style={styles.titulo}>UTP Match</Text>
          <Text style={styles.subtitulo}>Descubre tu carrera ideal hoy</Text>
        </View>

        <InputTexto 
          label="Correo Electrónico" 
          placeholder="tu.correo@utp.edu.pe"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <InputTexto 
          label="Contraseña" 
          placeholder="Escribe tu contraseña"
          esPassword={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ height: ESPACIADO.md }} />

        <Boton 
          texto="Ingresar" 
          variante="primario" 
          onPress={() => navigation.replace('Onboarding')} 
        />
        
        <View style={{ height: ESPACIADO.sm }} />

        <Boton 
          texto="Crear cuenta nueva" 
          variante="bordeado" 
            //navegacion
          onPress={() => navigation.navigate('Registro')} 
        />
      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  cabecera: { marginTop: ESPACIADO.xl * 2, marginBottom: ESPACIADO.xl * 2, alignItems: 'center' },
  titulo: { fontSize: 32, fontWeight: 'bold', color: COLORES.primario, marginBottom: ESPACIADO.sm },
  subtitulo: { fontSize: 16, color: COLORES.textoSecundario }
});