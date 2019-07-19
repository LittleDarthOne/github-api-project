import { createAppContainer, createStackNavigator } from 'react-navigation';

import Search from './src/screens/Search';
import Detail from './src/screens/Detail';

const MainNavigator = createStackNavigator(
  { 
    Search, 
    Detail, 
  },
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);

export default createAppContainer(MainNavigator);