import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '~/services/navigationService';

import {AppStack} from './routes';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
