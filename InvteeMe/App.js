import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from './AllFiles/Navigation/Nav'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return( 
    <NavigationContainer>
  <Nav/>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})