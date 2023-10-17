import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddressForm } from '../auth/AddressForm';
import  CheckoutScreen  from '../screens/checkoutScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="AddressForm">
      <Stack.Screen
        name="AddressForm"
        component={AddressForm}
        options={{ headerShown: true}}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: true, headerTransparent: true, headerTitle: 'Checkout', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};