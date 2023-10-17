import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailsScreen } from '../screens/productDetailsScreen';
import CheckoutScreen from '../screens/checkoutScreen';
import { TabNavigator } from './tabBar';

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
    </Stack.Navigator>
  );
};
