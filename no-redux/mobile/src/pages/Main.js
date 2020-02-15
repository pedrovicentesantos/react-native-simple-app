import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from '../services/api';
import AnuncioMain from '../components/AnuncioMain';

function Main({ navigation }) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect( () => {
    loadAnuncios();
  },[]);

  async function loadAnuncios() {
    const response = await api.get();
    
    setAnuncios(response.data);
  }

  function headerMain() {
    return(
      <View>
        <Text style={styles.header}>Imóveis para Aluguel</Text>
      </View>
    );
  }

  return (
    <FlatList 
      data={anuncios}
      renderItem={({item}) => <AnuncioMain navigation={navigation} anuncio={item} />}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent= {headerMain}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default Main;