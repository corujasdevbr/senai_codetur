import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Pacote from './pages/pacote';

const navegacao = createStackNavigator({
    Lista: {
      screen: Main
    },
    Pacote: {
      screen: Pacote
    }
  },
    {
        navigationOptions:{
            headerStyle:{
                backgroundColor: '#DA552F'
            },
            headerTintColor: "#FFF"
    }
});

const App = createAppContainer(navegacao);

export default App;

