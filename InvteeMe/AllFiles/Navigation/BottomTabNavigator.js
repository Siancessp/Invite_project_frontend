// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../BottomScreens/Home';
import Event from '../BottomScreens/Event';
import Weekend from '../BottomScreens/Weekend';
import Tour from '../BottomScreens/Tour';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Tab.Screen name="Event" component={Event} options={{ headerShown: false }}/>
    <Tab.Screen name="Weekend" component={Weekend} options={{ headerShown: false }} />
    <Tab.Screen name="Tour" component={Tour} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
