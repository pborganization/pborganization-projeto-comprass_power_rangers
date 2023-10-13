import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./src/routes/homeRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
