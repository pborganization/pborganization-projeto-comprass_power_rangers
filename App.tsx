import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './assets/styles/Colors';
import { HomeNavigator } from './src/routes/homeRoutes';

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
