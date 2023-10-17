import { StyleSheet, View } from 'react-native';
import { HomeNavigator } from './src/routes/homeRoutes';
import { NavigationContainer } from '@react-navigation/native';

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
  },
});
