import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AdressForm } from "./src/auth/AddressForm";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer> 
         <Stack.Screen name="Login" component={AdressForm}  options={{  headerShadowVisible: false }}/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
