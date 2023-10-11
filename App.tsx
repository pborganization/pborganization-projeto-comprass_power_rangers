import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/mainScreen";
import { ProfileScreen } from "./src/screens/profileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
