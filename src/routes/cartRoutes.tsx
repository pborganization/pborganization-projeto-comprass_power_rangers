import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CartScreen } from '../screens/CartScreen';
import { CheckoutScreen } from '../screens/checkoutScreen';

const Stack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartProductCard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CartProductCard"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
