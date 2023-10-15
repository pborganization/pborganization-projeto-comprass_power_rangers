import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { HomeNavigator } from "./src/routes/homeRoutes";
import { CartScreen } from "./src/screens/CartScreen";
import { AdressScreen } from "./src/screens/AdressScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack =  createNativeStackNavigator;
export default function App() {
  return (
    <View>
      <NavigationContainer>
       <HomeNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
