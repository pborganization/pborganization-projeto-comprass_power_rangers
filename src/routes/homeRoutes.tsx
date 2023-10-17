import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailsScreen } from '../screens/productDetailsScreen';
import { HomeScreen } from '../screens/homeScreen';
import { AdressScreen } from '../screens/AdressScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddressScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          title: 'Details',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AdressScreen}
        options={{
          title: 'Adress Screen',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
