import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddressForm } from '../auth/AddressForm';
import  CheckoutScreen  from '../screens/checkoutScreen';
import SuccessScreen from '../screens/successScreen';
import SuccessDownloadBill from '../screens/successDownloadBill';
import SuccessQRcodeScreen from '../screens/successQRcodeScreen';
import SuccessScreen2 from '../screens/sucessScreen2';
import { HomeScreen } from '../screens/homeScreen';


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

       <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name="SuccessScreen2"
        component={SuccessScreen2}
        options={{ headerShown: false}}
      />

       <Stack.Screen
        name="SuccessQRcodeScreen"
        component={SuccessQRcodeScreen}
        options={{ headerShown: false}}
      />

       <Stack.Screen
        name="SuccessDownloadBill"
        component={SuccessDownloadBill}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};