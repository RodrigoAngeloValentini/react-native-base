import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '~/pages/home';

const Stack = createStackNavigator();

const stackOptions = {
  headerStyle: {
    backgroundColor: '#FFF',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gestureEnabled: true,
  animationEnabled: true,
};

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{...stackOptions}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerBackTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
};
