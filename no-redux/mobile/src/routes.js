import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Information from './pages/Information';

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions: {
        title: 'Página Principal'
      }
    },
    Information:{
      screen: Information,
      navigationOptions:{
        title: 'Informações do Anúncio'
      }
    },
  }, {
    defaultNavigationOptions:{
      headerTintColor: '#FFF',
      headerStyle:{
        backgroundColor: '#48829d',
      }
    },
  }
));

export default Routes;