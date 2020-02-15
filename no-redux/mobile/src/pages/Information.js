import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

function Information({ navigation }) {
  const titulo = navigation.getParam('titulo');
  const urlImagem = navigation.getParam('url_imagem');
  const preco = navigation.getParam('preco');
  return (
    <View>
      <Image style={styles.image} source={{uri:urlImagem}} />
      <View style={styles.container}>
        <Text style={styles.identificador}>Imóvel:</Text>
        <Text style={styles.anuncioTitle}>{titulo}</Text>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.identificador}>Valor: </Text>
        <Text style={styles.anuncioPrice}>${preco}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },  
  identificador: {
    fontWeight:'bold',
    fontSize: 20,
  },  
  anuncioTitle: {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1,
  },
  anuncioPrice: {
    color: '#1f708e',
    fontSize: 20,
    paddingLeft: 5,
    flex: 1,
  }
});

export default Information;