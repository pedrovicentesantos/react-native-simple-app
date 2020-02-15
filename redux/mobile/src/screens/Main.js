import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { listAnuncios } from '../redux/reducer';

class Main extends Component {
  componentDidMount() {
    this.props.listAnuncios();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Anuncio', 
                                            {title:item.title, 
                                            image: item.image, 
                                            value: item.value})          
    }>
      <View style={styles.anuncioContainer}>
        <Image style={styles.imagem} source={{uri: item.image}} />
        <Text style={styles.anuncioTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { anuncios } = this.props;
    return (
      <FlatList
        data={anuncios}
        renderItem={this.renderItem}
        ListHeaderComponent={
          <View>
            <Text style={styles.header}>Imóveis para Aluguel</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
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

const mapStateToProps = state => {
  let storedAnuncios = state.anuncios.map(anuncio => ({ key: anuncio.id.toString(), ...anuncio }));
  return {
    anuncios: storedAnuncios
  };
};

const mapDispatchToProps = {
  listAnuncios
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
