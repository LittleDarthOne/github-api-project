import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Search from './src/screens/Search';
import Detail from './src/screens/Detail';

import Title from './src/components/Title';

const MainNavigator = createStackNavigator(
  { 
    Search, 
    Detail, 
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
      },
      headerTitle: ({children}) => <Title>{children}</Title>
    }
  }
);

export default createAppContainer(MainNavigator);