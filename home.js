import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Animated, Button } from 'react-native';
import * as Location from 'expo-location';

export function LandingScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();

  async function enviarCoords(latitude,longitude) {
    console.log("enviando coordenadas...")
    try {
      const response = await fetch('seu-backend/pegarcoords', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              latitude: latitude,
              longitude: longitude
          })
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("Coordenadas enviada com sucesso!")
        return data;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permissão não concedida.');
      return;
    } else {
      console.log("Permissão concedida!")
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    await enviarCoords(currentLocation.coords.latitude,currentLocation.coords.longitude);
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titlesmall}>
          Evite riscos,
        </Text>
        <Text style={styles.title}>
          Tampe Sua Caneta!
        </Text>
        <Text style={styles.subtitle}>
          Encontre unidades de distribuição de preservativos no Recife.
        </Text>
      </View>
      <Button 
        title="Ler minha localização"
        onPress={getLocation}
        color='#219d90'/>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 160,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  titlesmall: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  text: { 
    marginTop: 20,
    fontSize: 16,
    color: '#ffffff'
  }
});