// DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    <Drawer.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
