import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main-navigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
