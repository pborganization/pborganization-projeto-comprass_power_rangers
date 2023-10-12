
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdressScreen } from "./src/screens/AdressScreen";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Adding Shippping Adress" component={AdressScreen} options={{headerShadowVisible: false }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    < NavigationContainer >
      <MyStack />
    </ NavigationContainer >
  );
}
