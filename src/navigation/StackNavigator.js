import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#ff6347'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={screenOptions}
    >
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
    </Stack.Navigator>
  )
}

export function AboutStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={screenOptions}
    >
        <Stack.Screen name='About' component={About}></Stack.Screen>
    </Stack.Navigator>
  )
}