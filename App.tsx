import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AdressForm } from "./src/auth/AddressForm";
import { Colors } from "./assets/styles/Colors";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer> 
        <Stack.Navigator>
         <Stack.Screen name="Adding Shipping Address" component={AdressForm}  options={{  headerShadowVisible: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
});
