import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { HomeNavigator } from "./src/routes/homeRoutes";
import { CartScreen } from "./src/screens/CartScreen";
import { AdressScreen } from "./src/screens/AdressScreen";

export default function App() {
  return (
    <View>
      <NavigationContainer>
       <AdressScreen />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
