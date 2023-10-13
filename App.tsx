import { StyleSheet, Text, View } from "react-native";
import { ProfileScreen } from "./src/screens/profileScreen";
import { NotLogged } from "./src/components/profileComponents/NotLogged";

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
