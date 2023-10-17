import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailsScreen } from '../screens/productDetailsScreen';
import CheckoutScreen from '../screens/checkoutScreen';
import CheckoutNotLoggedin from '../screens/checkoutNotLoggedIn';
import { TabNavigator } from './tabBar';
import { LoginScreen } from '../screens/Login';
import { SignUpScreen } from '../screens/SingUp';
import { ForgotPasswordScreen } from '../screens/ForgotPassword';
import { AdressScreen } from '../screens/AdressScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigatorScreen"
        component={TabNavigator}
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
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CheckoutNotLoggedin"
        component={CheckoutNotLoggedin}
        options={{
          title: 'Checkout',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdressScreen"
        component={AdressScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
