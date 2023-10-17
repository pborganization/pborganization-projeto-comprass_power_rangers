import { StyleSheet, View } from 'react-native';
import { ProfileScreen } from './src/screens/profileScreen';
import { AuthProvider } from './src/contexts/AuthContext';
//import { NotLogged } from './src/components/profileComponents/NotLogged';

export default function App() {
  return <View style={styles.container}>
    <AuthProvider>
      <ProfileScreen/>
    </AuthProvider>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

