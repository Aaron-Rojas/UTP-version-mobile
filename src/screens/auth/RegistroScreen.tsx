import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContenedorSeguro from '../../components/layout/ContenedorSeguro';
import ContenedorScroll from '../../components/layout/ContenedorScroll';
import InputTexto from '../../components/ui/InputTexto';
import Boton from '../../components/ui/Boton';
import { COLORES, ESPACIADO } from '../../theme/tema';

export default function RegistroScreen({ navigation }: any) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContenedorSeguro>
      <ContenedorScroll>
        <View style={styles.cabecera}>
          <Text style={styles.titulo}>Únete a UTP Match</Text>
          <Text style={styles.subtitulo}>Crea tu cuenta para empezar</Text>
        </View>

        <InputTexto 
          label="Nombre Completo" 
          placeholder="Ej. Juan Pérez"
          value={nombre}
          onChangeText={setNombre}
        />

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
          placeholder="Mínimo 6 caracteres"
          esPassword={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ height: ESPACIADO.md }} />

        <Boton 
          texto="Registrarme" 
          variante="primario" 
          onPress={() => console.log('Registrando')} 
        />
        
        <View style={{ height: ESPACIADO.sm }} />

        <Boton 
          texto="Ya tengo cuenta" 
          variante="bordeado" 
          onPress={() => navigation.navigate('Login')} 
        />
      </ContenedorScroll>
    </ContenedorSeguro>
  );
}

const styles = StyleSheet.create({
  cabecera: { marginTop: ESPACIADO.xl, marginBottom: ESPACIADO.xl * 2, alignItems: 'center' },
  titulo: { fontSize: 28, fontWeight: 'bold', color: COLORES.primario, marginBottom: ESPACIADO.sm },
  subtitulo: { fontSize: 16, color: COLORES.textoSecundario }
});