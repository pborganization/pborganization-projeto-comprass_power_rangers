<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddressForm } from "./src/auth/AddressForm";
import { Colors } from "./assets/styles/Colors";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Adding Shipping Address"
            component={AddressForm}
            options={{ headerShadowVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
=======
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <View style={styles.container}></View>;
>>>>>>> 7965fadd7389c76ec4adc1f32ff2868caf92e35d
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: Colors.white,
=======
>>>>>>> 7965fadd7389c76ec4adc1f32ff2868caf92e35d
  },
});
