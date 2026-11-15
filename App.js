import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
}
