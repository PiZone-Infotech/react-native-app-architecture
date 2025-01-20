/**
 * App navigator
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FlashMessage, Loader } from '@app/global';
import { NavigationService } from '@app/helpers';
import { AppBootstrapGate } from '@app/modules/app-bootstrap';
import { selectActiveSection } from '@app/modules/common';
import { AppSection, Routes } from './constants';
import { MainStack } from './mainStack';

// Screen
import { LoginScreen } from '@app/modules/auth';

const Stack = createNativeStackNavigator();

/**
 * Screens stack related to Auth section
 * @returns
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={LoginScreen} name="Login" />
    </Stack.Navigator>
  );
};

// App Navigator
const Navigator = () => {
  const activeSection = useSelector(selectActiveSection);

  useEffect(() => {
    return () => {
      NavigationService.isReady.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      onReady={() => {
        NavigationService.isReady.current = true;
      }}
      ref={NavigationService.navigationRef}>
      <AppBootstrapGate>
        {activeSection === AppSection.MainSection ? MainStack() : AuthStack()}
      </AppBootstrapGate>
      <FlashMessage />
      <Loader />
    </NavigationContainer>
  );
};

export { Navigator };
