import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailsScreen } from '../screens/productDetailsScreen';
import { HomeScreen } from '../screens/Home/homeScreen';
import { AdressScreen } from '../screens/AdressScreen';
import { CartScreen } from '../screens/CartScreen';
import CheckoutScreen from '../screens/checkoutScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
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
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: '',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          title: '',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
