import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Anuncio({ navigation }) {
  const title = navigation.getParam('title');
  const image = navigation.getParam('image');
  const value = navigation.getParam('value');
  return (
    <View>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.container}>
        <Text style={styles.identificador}>Imóvel:</Text>
        <Text style={styles.anuncioTitle}>{title}</Text>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.identificador}>Valor: </Text>
        <Text style={styles.anuncioPrice}>${value}</Text>
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

export default Anuncio;