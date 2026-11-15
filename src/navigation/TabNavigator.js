
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import {
  HomeStackNavigator,
  AboutStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#f0c1b9',
        tabBarStyle: {
          backgroundColor: '#FF6347',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AboutTab"
        component={AboutStackNavigator}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'information-circle'
                  : 'information-circle-outline'
              }
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
