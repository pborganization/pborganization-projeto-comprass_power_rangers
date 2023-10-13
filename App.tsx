import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AdressForm } from "./src/auth/AddressForm";
import { CartScreen } from "./src/screens/CartScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShadowVisible: false, title: ''}}
          />
          <Stack.Screen
            name="Adding Shipping Address"
            component={AdressForm}
            options={{ headerShadowVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
