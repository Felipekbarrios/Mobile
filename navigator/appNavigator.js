import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Naruto from '../screens/Naruto.js';
import Sasuke from '../screens/Sasuke.js';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Naruto" component={Naruto} />
        <Tab.Screen name="Sasuke" component={Sasuke} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
