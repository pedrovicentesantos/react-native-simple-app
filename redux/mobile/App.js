import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/redux/reducer';
import Main from './src/screens/Main';
import Anuncio from './src/screens/Anuncio';

const client = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eduardobvale/demo/rentals',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Stack = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Página Principal'
      }
    },
    Anuncio: {
      screen: Anuncio,
      navigationOptions: {
        title: 'Informações do Imóvel'
      }
    }
  },{
    defaultNavigationOptions:{
      headerTintColor: '#FFF',
      headerStyle:{
        backgroundColor: '#48829d',
      }
    },
  })
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>       
        <Stack />
      </Provider>
    );
  }
}