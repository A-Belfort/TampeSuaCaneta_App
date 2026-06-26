import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, FlatList} from 'react-native';
import * as Location from 'expo-location';

export function HomeScreen() {
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("effect");

    async function buscarLista() {
      try {
        const response = await fetch(`seu-backend/listarunidades`)

        if (!response.ok){
          throw new Error(`Erro de HTTP! Status: ${response.status}`);
        }

        const data = await response.json()
        console.log(`Dados: ${data[0]["_id"]}`);

        setLista(data);
      } catch (error) {
        if (error.name == "TypeError") {
          console.error("Erro de rede.", error.message)
        } else {
          console.error("Erro:", error.message)
        }
      }
    };
    
    buscarLista();
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.locationcard}>
      <View style={styles.header}>
        <Text style={styles.nome}>🏥 {item.nome_oficial}</Text>
        <Text style={styles.distancia}>{item.distancia.toFixed(2)} km</Text>
      </View>
      <Text style={styles.telefone}>📞: 81 {item.fone}</Text>
      <Text style={styles.endereco}>📍: {item.endereço}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={lista}
      renderItem={renderItem}
      keyExtractor={(item) => item._id} 
    >  
    </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  locationcard: {
        backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    flexWrap: 'wrap',
  },
  distancia: {
    justifyContent: 'right',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    flexWrap: 'wrap',
  },
  telefone: {
    fontSize: 14,
    color: '#2980B9',
  },
  
  endereco: {
    fontSize: 14,
    color: '#7F8C8D',
    flex: 1,
    flexWrap: 'wrap',
  },
  container: { backgroundColor: '#FFFFFF',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  text: { 
    marginTop: 20,
    fontSize: 16 }
});