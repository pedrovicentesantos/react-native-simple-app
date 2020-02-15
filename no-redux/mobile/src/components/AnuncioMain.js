import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function AnuncioMain({ anuncio, navigation }) {
  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Information', 
                                            {titulo:anuncio.title, 
                                            url_imagem: anuncio.image, 
                                            preco: anuncio.value})          
        }>
        <View style={styles.anuncioContainer}>
          <Image style={styles.imagem} source={{uri: anuncio.image}} />
          <Text style={styles.anuncioTitle}>{anuncio.title} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  anuncioTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  anuncioContainer: {
    marginTop: 5,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#48829d',
    backgroundColor: '#cbdee7',
    flexDirection: 'row',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderWidth: 4,
  },
});

export default AnuncioMain;