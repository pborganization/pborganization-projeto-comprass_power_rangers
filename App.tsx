import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './src/screens/mainScreen';
import { LoginScreen } from './src/screens/Login';
import { SignUpScreen } from './src/screens/SingUp';
import { ForgotPasswordScreen } from './src/screens/ForgotPassword';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'OpenSans-400': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-600': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-700': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-800': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  if (!isFontsLoaded){
    return null;
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='#111213'/>
      <View style={styles.container}>
        {/* <MainScreen /> */}
        <ForgotPasswordScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

