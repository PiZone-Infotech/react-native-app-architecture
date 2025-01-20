/**
 * App Main Navigator
 * @format
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './constants';

// Screens

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}></Stack.Navigator>
  );
};

export { MainStack };
